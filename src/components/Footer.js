import React from 'react';
import './Footer.css'
import NavItemsContainer from '../containers/NavItemsContainer';

const Footer = () => {

  return (
    <div className="Footer" >
      <nav className="Footer-nav">
        <NavItemsContainer />
      </nav>
      <p className="Copyright">&copy; Copyright 2018 Meilab All Rights Reserved</p>
    </div>
  );
};

export default Footer