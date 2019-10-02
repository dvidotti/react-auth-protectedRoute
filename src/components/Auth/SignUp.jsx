import React, { Component } from 'react'
import AuthService from './auth-route'
import { Link } from 'react-router-dom';
import './Auth.css'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password} = this.state;
  
    this.service.signup(username, password)
    .then(response => {
        this.setState({
            username: "", 
            password: "",
            redirect: true,
            message: ''
        });
        this.props.getUser(response)
        this.props.history.push('./home')
    })
    .catch( error => {
      this.setState({ message: error.response.data.message});
    })
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render () {
    return(
      <div className='auth-full-page'>
        <div className="auth-block">
          <h1 className="logo">YOUR LOGO</h1>
          {/* <img className="logo-image" src="/images/logo.jpg" alt="AI-logo"/> */}
        </div>
        <form className='auth-form' onSubmit={this.handleFormSubmit}>
          <input className='auth-input' type="text" name="username" placeholder="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          <input className='auth-input' type="password" name="password" placeholder="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          <input className='auth-button' type="submit" value="SignUp" />
        </form>
        <div className="login-link">
          {this.state.message? 
          <p className="error-message">{this.state.message}</p>
          : <p hidden></p>}
          <h4 className="conditional">Has an account? 
              <Link to={"/login"}>  Login  </Link>
          </h4>
        </div>
      </div>
    )
  }
}

export default SignUp;