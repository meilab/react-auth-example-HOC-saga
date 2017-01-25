import React from 'react';
import Hero from './Hero';
import HomeItem from './HomeItem';
import SideBar from './SideBar';
import './Home.css';

const Home = () => {
  return (
    <div className="container" >
      <Hero />
      <HomeItem />
      <SideBar />
    </div>
  );
};

export default Home;