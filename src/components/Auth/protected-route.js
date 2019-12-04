import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const protectedRoute  = ({component: Component, user, ...rest}) => {
  console.log(user)
  return (
      <Route
      {...rest}
      render={ props  => {
        if(user) {
              return <Component {...rest} {...props} loggedInUser={user}/>
            } else {
              return <Redirect to={{pathname: '/login', state: {from: props.location}}} />
            }
          }
        }
      />
    )
}
export default protectedRoute;