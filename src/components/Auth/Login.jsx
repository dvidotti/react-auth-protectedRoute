import React, { useState }from "react"
import AuthRoute from './auth-route'
import { Link } from 'react-router-dom';
import './Auth.css'

const Login = (props) => {
    const [name, getName] = useState('');
    const [password, getPassword] = useState('');
    const [message, getMessage] = useState('');
    let service = new AuthRoute();

    
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if(name === '' || password === '') {
      getMessage('No user or password provided');
    } else {
        service.login(name, password)
        .then(response => { 
         getName('');
         getPassword('');
          props.getUser(response)
          props.history.push('./home')
        })
        .catch(error => {
          getMessage(error.response.data.message);
        })
    }
  }

  return (
    <div className="auth-full-page">
      <div className="auth-block">
        <h1 className="logo">YOUR LOGO</h1>
      </div>
      <form className="auth-form" onSubmit={(e) => handleFormSubmit(e)}>
        <label htmlFor="name"> 
          <input type="text" className="auth-input" name="name" placeholder="username" value={name} onChange={(e) => getName(e.target.value)}/>
        </label>
        <label htmlFor="password"> 
          <input type="password" className="auth-input" name="password"  placeholder="password" onChange={(e) => getPassword(e.target.value)}></input>
        </label>
        <input className="auth-button" type="submit" value="Login"/>
      </form>
      <h1 className="error-message">{message}</h1>
      <h4 className="conditional">Don't have an account? 
            <Link to={"/signup"}>  SignUp  </Link>
        </h4>
    </div>
  )
}

export default Login;