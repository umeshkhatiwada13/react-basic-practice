import React from 'react';
import "../styles/Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/redux">Redux</Link>
      <Link to="/redux-dashboard">Redux Dashoard</Link>
    </nav>
  );
};

export default Header