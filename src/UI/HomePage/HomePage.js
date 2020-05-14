import React from "react";
import indeximage from "../../assests/images/indeximage.jpeg";
import classes from "./HomePage.module.css";
import Navbar from "../NavBar/Navbar";
import portret from "../../assests/images/daniel.png";

const homePage = () => {
  return (
    <div>
      <Navbar />
      <img
        className={classes.IndexImage}
        src={indeximage}
        alt="backgroundImage"
      />

      <div className={classes.Introduction}>
        <img className={classes.Portret} src={portret} alt="daniel" />
        <h1>Brendea Daniel</h1>
        <h2>Yet another junior web developer having some fun</h2>
      </div>
    </div>
  );
};

export default homePage;
