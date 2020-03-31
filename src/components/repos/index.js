import React from 'react'
import { Repo } from '../repo'

export const Repos = ({repos}) => {
    return (
        <div>
            {repos.map(repo=><Repo repo={repo} key={repo.id} />)}
        </div>
    )
}
