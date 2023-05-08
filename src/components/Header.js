import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Header</div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </div>
  );
};

export default Header;
