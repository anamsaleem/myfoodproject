// pages/index.js
'use Client'
import React from 'react';

export default function Header() {
  return (
    <div className="outercontainer">
      <div className="button-container">
        <img src="logo4.png" className="logo" alt="Logo" />
        <div className="nav-buttons">
          <a href="#" className="nav-button">Home</a>
          <a href="#" className="nav-button">Services</a>
          <a href="#" className="nav-button">Contact</a>
          <a href="#" className="nav-button">About</a>
        </div>
        <a href="#" className="login-button">
          <img src="login 3.png" alt="Login" />
        </a>
      </div>
      
      <img className="image" src="image2.png" alt="" />
    </div>
  );
};
