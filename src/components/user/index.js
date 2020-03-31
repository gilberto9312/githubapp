import React, { useEffect, useContext } from 'react'
import {Spinner} from '../spinner'
import {Link} from 'react-router-dom'
import { Repos } from '../repos'
import GithubContext from '../../context/github/githubContext'

const User =({match})=> {
    const githubContext = useContext(GithubContext)

    useEffect(()=>{
        githubContext.getUser(match.params.login) 
        githubContext.getUserRepos(match.params.login)   
        // eslint-disable-next-line
    },[])
        const {user, loading, repos} = githubContext
        const {
            avatar_url,
            html_url,
            name,
            location,
            email,
            hireable,
            bio,
            public_repos,
            public_gists,
            followers,
            following
           
        } = user

        if(loading){
            return(
                <div className="container">
                    <Spinner />
                </div>
            )
        }
        return (
            <div className="container">
                <Link to="/" className="btn btn-light">Back Home</Link>
                hireable :{''}
                {
                    hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />
                }
                <div className="card all-center">
                    <div className="all-center">
                        <img src={avatar_url} alt="avatar" className="round-img" style={{width:'150px'}} />
                        <h1>{name}</h1>
                        <p>Location: {location}</p>

                        <div>
                            {bio && <>
                                Bio: {bio}
                            </>}
                            <br />
                            <a href={html_url} target="blank" className="btn btn-dark my-1">Visit GitHub profile</a>
                        </div>
                        <div>
                            {email && <>
                                Email: {email}
                            </>}
                        </div>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">Followers: {followers}</div>
                    <div className="badge badge-success">Following: {following}</div>
                    <div className="badge badge-ligth">Public Repos: {public_repos}</div>
                    <div className="badge badge-dark">Public Gists: {public_gists}</div>
                </div>
                <h3>Latest project</h3>
                <Repos repos={repos} />
            </div>
        )
}

export default User
