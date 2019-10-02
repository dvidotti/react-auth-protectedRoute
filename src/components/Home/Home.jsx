import React, { Component } from 'react' 
import AuthRoute from '../Auth/auth-route'
import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null
    }
    this.service = new AuthRoute();
  }

  logoutUser = () => {
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null })
      this.props.getUser(null)
    })
  }

  render() {   
    return (
      <div>
        <div className="full-home-page">
          <nav className="nav">
            {/* <img className="nav-logo" src="./images/logo.jpg" alt="ai-logo"/> */}
            <h1 className="nav-logo">YourLogo</h1>
            <button className='form-button' onClick={() => this.logoutUser()}>LOGOUT</button>
          </nav>
          <section className="section-body">
            {this.props.loggedInUser ?
             <h1 className="title-home">Welcome {this.props.loggedInUser.username}</h1> : <h1 className="title-home">Welcome</h1>
            }
            <article>
              <h2 className="subtitle">The best title ever</h2>
              <p className="article">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </article>
            <article>
              <h2 className="subtitle">The second best</h2>
              <p className="article">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </article>
            <footer>Your - All rights reserved 2019</footer>
          </section>
        </div>
      </div>
    )
  }
}

export default Home;