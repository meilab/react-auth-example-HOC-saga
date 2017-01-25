import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Message">
        <p><span>Small Rodents.</span><br /><span>Big Ideas.</span></p>
        <a href="/join" className="message-button button">Join the SRSKC!</a>
      </div>
      <div className="Award">
        <img src="http://chris.house/images/award.png" alt="Award" />
        <blockquote>"One of Kansas City's<br /> Finest Rodent Societies!"<br />
          <cite>-Rat Fancy Magazine</cite>
        </blockquote>			
      </div>
    </div>
  );
};

export default Hero;