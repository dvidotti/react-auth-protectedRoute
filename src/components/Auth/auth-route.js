import axios from 'axios'

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL:process.env.REACT_APP_API_URL,
      withCredentials: true
    })
    this.service = service;
  }

  signup = (username, password) => {
    let userObj = {username, password}
      return this.service.post('/signup', userObj)
       .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/loggedin')
     .then(response => {
        return response.data
      })
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
      .then(response => {
       return response.data
      })
  }

  logout = () => {
    return this.service.post('/logout', {})
      .then(response => response.data)
   }
}

export default AuthService;