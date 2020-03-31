import React,{ useContext,useEffect } from 'react'
import UserItem from '../userItem'
import {Spinner} from '../spinner'
import GithubContext from '../../context/github/githubContext'

const Users = () =>{

    const githubContext = useContext(GithubContext)
    

    useEffect(() => {
        githubContext.searchUserPrincipal()
        // eslint-disable-next-line
      }, [])
      const {loading, users} = githubContext

        if(loading){
            return(
                <Spinner />
            )
        }
        return (
            <div style={userStyle}>
                {
                    users.map(user=>(
                        <UserItem 
                            key={user.id} user={user} />
                    ))                
                }                
            </div>
        )
}

const userStyle={
    display:'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}
export default Users
