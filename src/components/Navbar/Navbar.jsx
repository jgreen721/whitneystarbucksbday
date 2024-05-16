import React from 'react'
import { SiStarbucks } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <div className="nav-column">
        <SiStarbucks className="sb-icon" />
      </div>
      <div className="nav-column">
        <RxHamburgerMenu className="burger-icon" />
      </div>
    </nav>
  )
}

export default Navbar