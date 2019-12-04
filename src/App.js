import React, { useContext } from 'react';
import { Switch, Route } from "react-router-dom"
import './App.css';
import ProtectedRoute from './components/Auth/protected-route'
import Login from'./components/Auth/Login.jsx'
import Home from './components/Home/Home'
import { UserContext } from './context/UserContext';


const App = () => {
  const {user}  = useContext(UserContext);
    return (
      <Switch>
          <Route exact path="/login" user={user} component={Login}/>} />
          <ProtectedRoute exact path="/home" user={user} component={Home}/>/>
          <ProtectedRoute exact path="/signup" user={user} component={Home}/>/>
      </Switch>
    );
}


export default App;
