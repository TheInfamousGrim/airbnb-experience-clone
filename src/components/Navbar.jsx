import React from "react";
import airbnbLogo from '../assets/airbnb-logo.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img className="navbar__logo" src={airbnbLogo} alt="logo for airbnb" />
        </nav>
    )
}

export default Navbar;