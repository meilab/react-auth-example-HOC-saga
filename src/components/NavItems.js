import React from 'react';
import { Link } from 'react-router';
import LoginItem from './LoginItem';

const NavItems = ({ loginState, attemptLogout }) => {
  return (
    <div>
      <Link to="/" className="Link" >Home</Link>
      <Link to="/private" className="Link" >Private</Link>
      <LoginItem loginState={loginState} attemptLogout={attemptLogout} />
    </div>
  );
};

export default NavItems;