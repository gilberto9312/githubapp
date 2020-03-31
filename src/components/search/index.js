import React,{useState, useContext} from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'
const Search = () => {
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)
    const { showAlert} = alertContext
    const [text, setText]= useState('')

    const onSubmit =(e)=>{
        e.preventDefault()
        if(text === ''){
            showAlert('empty box search','ligth')
        }else{
            githubContext.searchUser(text)
            setText('')
        }
    }
    const onChange =(e)=>setText( e.target.value)
    
        return (
            <div>
                <form className="form" onSubmit={onSubmit}>
                    <input type ="text" 
                           name ="text"
                           placeholder="Type Search"
                           value={text}
                           onChange={onChange} />
                    <input type ="submit"
                           value="search"
                           className="btn btn-dark btn-block" />
                </form>
                {
                    githubContext.users.length > 0 && <button className=" btn btn-block btn-light" onClick={githubContext.clearUsers}>clear</button>
                }
            </div>
        )
}

export default Search
