import React from 'react';
import '../styles/sidebar.css';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Watchlist</a></li>
        <li><a href="#">Global</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Paper Strategy</a></li>
        <li><a href="#">Live Trading</a></li>
        <li><a href="#">Journal</a></li>
        <li><a href="#">Backtest</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
