import React from 'react';
import "../navbar/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>THE LAB</h1>
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
