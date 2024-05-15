// Navbar.js
import React from 'react';
import '../styles/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const Nav=useNavigate()

    const handleNavigation = (path) => {
        Nav(path);
    }

    return (
        <header className="header">
            <img className="logo" src={"movie14.png"} style={{ height: "160%", width: "23%", marginLeft: "0px" }} alt="Logo" />
            <nav className="navbar">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/profile">Profile</Link>
            </nav>
        </header>
    );
}

export default Navbar;
