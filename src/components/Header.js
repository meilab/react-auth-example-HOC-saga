import React from 'react';
import './Header.css';
import NavItemsContainer from '../containers/NavItemsContainer';

const Header = () => {
  return (
    <div className="Header" >
      <div className="Logo-container">
        <p className="Logo"><span>The</span> <span>Small Rodent Society</span> <span>of Kansas City</span></p>
      </div>
      <nav className="Main-nav">
        <NavItemsContainer />
      </nav>
    </div>
  );
};

export default Header