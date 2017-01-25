import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="Top-bar">
        <a className="Social-link" href="/"><i className="fa fa-google-plus"></i></a>
        <a className="Social-link" href="/"><i className="fa fa-weibo"></i></a>
        <a className="Social-link" href="/"><i className="fa fa-linkedin"></i></a>
        <a className="Social-link" href="/"><i className="fa fa-wechat"></i></a>
        <a className="Contact-link" href="tel:+9131234567"><i className="fa fa-phone"></i> 111.111.111</a>
        <a className="Contact-link" href="mailto:info@srskc.org"><i className="fa fa-envelope"></i> info@example.com</a>
    </div>
  );
};

export default TopBar;