import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assests/images/logo_transparent_small.png";
import classes from "./Navbar.module.css";

const navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <NavLink
        to="/projects"
        activeClassName={classes.active}
        className={classes.Link}
      >
        Projects
      </NavLink>

      <NavLink to="/">
        <div className={classes.LogoDiv}>
          <img className={classes.Logo} src={logo} alt="logo" />
        </div>
      </NavLink>
      <NavLink
        to="/contact"
        activeClassName={classes.active}
        className={classes.Link}
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default navbar;
