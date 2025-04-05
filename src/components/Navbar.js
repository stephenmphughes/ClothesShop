import React from "react";
import '../App.css';


const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-brand">ADDIDEV</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
