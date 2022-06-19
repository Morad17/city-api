import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="main-nav">
      <ul className="nav-list">
        <li className="nav-link"><Link to="/">Home</Link></li>
        <li className="nav-link"><Link to="/CityDetails">City Details</Link></li>
        <li className="nav-link"><Link to="/CityDetails">City Details</Link></li>
        <li className="nav-link"><Link to="/CityDetails">City Details</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar