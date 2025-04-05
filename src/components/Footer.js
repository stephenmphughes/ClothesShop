// src/components/Footer.js
import React from "react";
import '../App.css';


function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <img
          src="/images/addidevwhite.svg"
          alt="AddiDev Logo"
          style={{ height: '80px', marginBottom: '20px' }}
        />
        <p className="mb-1">Try our new clothing line called The Pipeline</p>
        <p className="mb-0">Addidev – Git pushing your limits</p>
      </div>
    </footer>
  );
}

export default Footer;

