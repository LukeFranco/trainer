import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header-outer">
      <div className="header-inner responsive-wrapper">
        <div className="header-logo">
          <img src="https://assets.codepen.io/285131/acme-2.svg" />
        </div>
        <nav className="header-navigation">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact Us</a>
          <button>Menu</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;