import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/images/logo_transparent_small.png";
import classes from "./Navbar.module.css";

const navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <Link to="/projects" className={classes.Link}>
        Projects
      </Link>
      <Link to="/">
        <div className={classes.LogoDiv}>
          <img className={classes.Logo} src={logo} alt="logo" />
        </div>
      </Link>
      <Link to="/contact" className={classes.Link}>
        Contact
      </Link>
    </nav>
  );
};

export default navbar;
