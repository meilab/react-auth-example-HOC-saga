import React from 'react';
import './SideBar.css';

const SideBar = () => {
  return (
    <div className="Side-bar">
      <h2>Critter of the Month</h2>
      <img className="Critter-pic" src="http://chris.house/images/chippy.jpg" alt="Critter of the Month - Chippy" />
      <ul className="Critter-info">
        <li>Name: Chippy</li>
        <li>Breed: Common Hamster</li>
        <li>Age: Unknown</li>
        <li>Favorite Pastime: Eating Broccoli</li>
        <li>SRSKC Member Since: 2017</li>
        <li>Owner: Nancy B.</li>
      </ul>
      <p className="Nominate-text">Nominate your pet for Critter of the Month<br />
        <a href="/nominate" className="Side-bar-button Button">Apply Here</a>
      </p>
    </div>
  );
};

export default SideBar;