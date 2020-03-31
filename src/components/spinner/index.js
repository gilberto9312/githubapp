import React from 'react'
import spin from './spinner.gif'

export const Spinner = () => {
    return (
        <div>
            <img src ={spin} alt="Loading ..." style={{width: '200px',margin:'auto',display:'block'}} />
        </div>
    )
}
