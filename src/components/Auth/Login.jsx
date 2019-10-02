import React, { Component }from "react"
import AuthRoute from './auth-route'
import { Link } from 'react-router-dom';
import './Auth.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      password:'',
      message:'',
    }
    this.service = new AuthRoute();
    this.handlerChange = this.handlerChange.bind(this); 
    this.handleFormSubmit = this.handleFormSubmit.bind(this); 
  }

  handlerChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]:value
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const {name, password} = this.state;
    if(name === '' || password === '') {
      this.setState({ message: 'No user or password provided'});
    } else {
        this.service.login(name, password)
        .then(response => { 
          this.setState({name:'', password:''});
          this.props.getUser(response)
          this.props.history.push('./home')
        })
        .catch(error => {
          this.setState({ message: error.response.data.message});
        })
    }
  }

  render() {
    return (
      <div className="auth-full-page">
        <div className="auth-block">
          <h1 className="logo">YOUR LOGO</h1>
          {/* <img className="logo-image" src="/images/logo.jpg" alt="AI-logo"/> */}
        </div>
        <form className="auth-form" onSubmit={this.handleFormSubmit}>
          <label htmlFor="name"> 
            <input type="text" className="auth-input" name="name" placeholder="username" value={this.state.name} onChange={(e) => this.handlerChange(e)}/>
          </label>
          <label htmlFor="password"> 
            <input type="password" className="auth-input" name="password"  placeholder="password" onChange={(e) => this.handlerChange(e)}></input>
          </label>
          <input className="auth-button" type="submit" value="Login"/>
        </form>
        <h1 className="error-message">{this.state.message}</h1>
        <h4 className="conditional">Don't have an account? 
              <Link to={"/signup"}>  SignUp  </Link>
          </h4>
      </div>
    )
  }
}

export default Login;