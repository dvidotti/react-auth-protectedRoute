import React, { useContext } from 'react' 
import AuthRoute from '../Auth/auth-route'
import './Home.css'
import { UserContext } from '../../context/UserContext'

const Home = (props) => {
  const { fetchUser } = useContext(UserContext)
  const service = new AuthRoute();
 
  const logoutUser = () => {
    service.logout()
    .then(() => {
      fetchUser(null)
    })
  }

  return (
    <div>
      <div className="full-home-page">
        <nav className="nav">
          <h1 className="nav-logo">YourLogo</h1>
          <button className='form-button' onClick={() => logoutUser()}>LOGOUT</button>
        </nav>
        <section className="section-body">
          {props.loggedInUser ?
            <h1 className="title-home">Welcome {props.loggedInUser.username}</h1> : <h1 className="title-home">Welcome</h1>
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

export default Home;