import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // or your CSS file

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">
        <Link to="/">PD</Link>
      </h1>
      <div className="navbar-list">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Project</Link>
      </div>
      <div className="navbar-login">
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
