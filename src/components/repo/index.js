import React from 'react'

export const Repo = ({repo}) => {
    return (
        <div className="card">
            <h3>
                <a href={repo.html_url} target="blank">{repo.name}</a>
            </h3>
        </div>
    )
}
