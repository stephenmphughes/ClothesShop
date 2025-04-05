import React from "react";
import '../App.css';


const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-brand">ADDIDEV</div>
      <ul className="navbar-links">
        <li><a href="/">Continous</a></li>
        <li><a href="#products">Integration</a></li>
        <li><a href="#about">Development</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
