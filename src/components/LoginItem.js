import React from 'react';
import { isLoggedIn } from '../redux/Login';
import { Link } from 'react-router';

const LoginItem = ({ loginState, attemptLogout }) => {
  let retItem

  if (isLoggedIn(loginState)) {
    retItem = (
        <Link to="/" className="Link" onClick={attemptLogout} >
          Logout
        </Link>
      )
  } else {
    retItem = <Link to="/login" className="Link" >Login</Link>
  }

  return retItem
}

export default LoginItem