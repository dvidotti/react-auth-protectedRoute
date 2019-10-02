import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import './App.css';
import AuthService from './components/Auth/auth-route';
import ProtectedRoute from './components/Auth/protected-route'
import Login from'./components/Auth/Login.jsx'
import Home from './components/Home/Home'
import SignUp from './components/Auth/SignUp';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      password: '',
      loggedInUser: false
    }
    this.service = new AuthService();
    // this.fetchUser = this.fetchUser.bind(this);
    this.getUser = this.getUser.bind(this);
  }


  
  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
      .then(response => {
        console.log('RESPONSE FETCH',response)
        this.setState({
          loggedInUser: response
        })
      })
      .catch(err => {
        this.setState({
          loggedInUser: false
        })
      })
    }
  }
  
  getUser(userObj) {
    this.setState({loggedInUser:userObj})
  }


  render() {
    this.fetchUser();
    if (this.state.loggedInUser) {
      return (
        <Switch>
          <ProtectedRoute exact path="/login" getUser={this.getUser} user={this.state.loggedInUser} component={Home}/>} />
          <ProtectedRoute exact path="/home" getUser={this.getUser} user={this.state.loggedInUser} component={Home}/>/>
          <ProtectedRoute exact path="/signup" getUser={this.getUser} user={this.state.loggedInUser} component={Home}/>/>
        </Switch>
      );
    } else {
      return (
        <Switch>
          <Route path="/login" render={(props) => <Login {...props} getUser={this.getUser}/>} />
          <Route path="/signup" render={(props) => <SignUp {...props} getUser={this.getUser}/>} />
          <ProtectedRoute path="/home" getUser={this.getUSer} user={this.state.loggedInUser} component={Home} />
        </Switch>
      )
      }
  }
}

export default App;
