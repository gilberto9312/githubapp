import React, { Fragment } from 'react'
import './App.css'
import { Alert } from './components/alert'
import NavBar from './components/navbar'
import Search from './components/search'
import Users from './components/Users'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { About } from './components/about'
import User from './components/user'

import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import NotFound from './components/notfound'
import Home from './home'

const App = ()=>{
     
      return (
      <div>
      <GithubState>
        <AlertState>
          <Router>
            <NavBar title="GitHub App" icon ="fab fa-github" />
            <Alert />
            <Switch>
              <Route exact path="/" component ={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" render={props=>(
                <User
                  {...props} />
              )} />
              <Route component={NotFound} />
              </Switch>
            </Router>
          </AlertState>
        </GithubState>
        
      </div>
    );
   
}

export default App;
