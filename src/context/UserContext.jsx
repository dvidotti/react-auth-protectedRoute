import React, { createContext, Component } from "react";
export const UserContext = createContext();

class UserContextProvider extends Component {
  state = {
    user: null
  }
    
  fetchUser = (response) => {
    this.setState({user:response})
  }

  render() {
    return (
      <UserContext.Provider value={{user: this.state.user, fetchUser: this.fetchUser}}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export default UserContextProvider;