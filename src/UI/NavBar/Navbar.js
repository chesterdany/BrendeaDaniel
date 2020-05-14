import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/images/logo_transparent_small.png";
import classes from "./Navbar.module.css";

const navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <div className={classes.LogoDiv}>
        <img className={classes.Logo} src={logo} alt="logo" />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
