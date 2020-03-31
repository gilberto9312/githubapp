import React, {useReducer} from 'react'
import axios from 'axios'
import githubContex from './githubContext'
import GithubReducer from  './githubReducer'

import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING
} from '../types'

let client, secret
if(process.env.NODE_ENV !== 'production'){
  client = process.env.REACT_APP_GITHUB_CLIENT_ID
  secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
}else{
  client = process.env.GITHUB_CLIENT_ID
  secret = process.env.GITHUB_CLIENT_SECRET
}
const GithubState = props =>{
    const initialState ={
        users:[],
        user:{},
        repos:[],
        loading:false
    }

    const [state, dispatch]= useReducer(GithubReducer, initialState)


    // search users

    const searchUserPrincipal =()=> {
        
        
        setLoading()
        axios.get(`https://api.github.com/users?client_id=${client}&cliente_secret=${secret}`).then(function(resp){
            
            dispatch({
                type:SEARCH_USERS,
                payload: resp.data
            })
        })
    }

    const searchUser = async text =>{
        
        
        setLoading()
        const resp = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${client}&cliente_secret=${secret}`)
        
        dispatch({
          type: SEARCH_USERS,
          payload: resp.data.items
        })
      }
    // get user

    const getUser = async username =>{

        
        
        setLoading()
        const resp = await axios.get(`https://api.github.com/users/${username}?client_id=${client}&cliente_secret=${secret}`)
        dispatch({
            type:GET_USER,
            payload: resp.data
        })
      }
    //get Repos

    
  const getUserRepos = async username =>{

    
    
    setLoading()
    const resp = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${client}&cliente_secret=${secret}`)
    
    dispatch({
        type: GET_REPOS,
        payload: resp.data
    })
  }
    //clear user

    
  const clearUsers = () =>{ 
    dispatch({
        type: CLEAR_USERS
    })
  }
  
    //set loading
    const setLoading = () => dispatch({type: SET_LOADING})

    return <githubContex.Provider 
        value ={{
            users:state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUserPrincipal,
            searchUser,
            clearUsers,
            getUser,
            getUserRepos
        }}
    >
    {props.children}
    </githubContex.Provider>
}

export default GithubState