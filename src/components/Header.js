import {NavLink} from "react-router-dom";
import React from "react";

const Header = () => (
    <header>
        <h1>Portfolio Site</h1>
        <NavLink to="/" className={({ isActive }) => "" + (isActive ? "is-active" : "")}>Home</NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => "" + (isActive ? "is-active" : "")}>Portfolio</NavLink>
        <NavLink to="/contact" className={({ isActive }) => "" + (isActive ? "is-active" : "")}>Contact</NavLink>
    </header>
);

export default Header;