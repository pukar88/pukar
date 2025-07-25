import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="navbar">
    <h1 className="logo">
      <Link to="/">
      PD
      </Link>
      </h1>
  <div className='navbar-list'>
       <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/project">Project</Link>
    </div>

   
    
    <div>
      <button>login</button>
    </div>
    </div>
  )
}

export default Navbar
