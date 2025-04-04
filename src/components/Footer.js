// src/components/Footer.js
import React from "react";
import '../App.css';



function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <small>&copy; {new Date().getFullYear()} Clothing Store. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
