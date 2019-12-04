import React, { useState } from 'react'
import AuthService from './auth-route'
import { Link } from 'react-router-dom';
import './Auth.css'

const SignUp = (props) => {
    const [username, getName] = useState('');
    const [password, getPassword] = useState('');
    const [message, getMessage] = useState('');
    const service = new AuthService();
  

  const handleFormSubmit = (event) => {
    event.preventDefault();
    service.signup(username, password)
    .then(response => {
      getName('');
      getPassword('');
      getMessage('');
        props.getUser(response)
        props.history.push('./home')
    })
    .catch( error => {
      getMessage(error.response.data.message)
    })
  }
  

  return(
    <div className='auth-full-page'>
      <div className="auth-block">
        <h1 className="logo">YOUR LOGO</h1>
      </div>
      <form className='auth-form' onSubmit={(e) => handleFormSubmit(e)}>
        <input className='auth-input' type="text" name="username" placeholder="username" value={username} onChange={ e => getName(e.target.value)}/>
        <input className='auth-input' type="password" name="password" placeholder="password" onChange={ e => getPassword(e.target.value)} />
        <input className='auth-button' type="submit" value="SignUp" />
      </form>
      <div className="login-link">
        {message? 
        <p className="error-message">{message}</p>
        : <p hidden></p>}
        <h4 className="conditional">Has an account? 
            <Link to={"/login"}>  Login  </Link>
        </h4>
      </div>
    </div>
  )
}

export default SignUp;