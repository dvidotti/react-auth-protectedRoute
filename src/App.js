import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom"
import './App.css';
import AuthService from './components/Auth/auth-route';
import ProtectedRoute from './components/Auth/protected-route'
import Login from'./components/Auth/Login.jsx'
import Home from './components/Home/Home'
import SignUp from './components/Auth/SignUp';


const App = () => {
  const [ loggedInUser, getLoggedInUser ] = useState(false)
  const service = new AuthService();
  
  const fetchUser = () => {
    if (loggedInUser === null) {
      service.loggedin()
      .then(response => {
        getLoggedInUser(response)
        })
      .catch(err => {
        getLoggedInUser(false)
      })
    }
  }
  
  const getUser = (userObj) => {
    getLoggedInUser(userObj)
  }

  fetchUser();
  if (loggedInUser) {
    return (
      <Switch>
        <ProtectedRoute exact path="/login" getUser={getUser} user={loggedInUser} component={Home}/>} />
        <ProtectedRoute exact path="/home" getUser={getUser} user={loggedInUser} component={Home}/>/>
        <ProtectedRoute exact path="/signup" getUser={getUser} user={loggedInUser} component={Home}/>/>
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path="/login" render={(props) => <Login {...props} getUser={getUser}/>} />
        <Route path="/signup" render={(props) => <SignUp {...props} getUser={getUser}/>} />
        <ProtectedRoute path="/home" getUser={getUser} user={loggedInUser} component={Home} />
      </Switch>
    )
  }
}


export default App;
