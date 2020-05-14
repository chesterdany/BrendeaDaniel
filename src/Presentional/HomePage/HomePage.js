import React from "react";
import indeximage from "../../images/indeximage.jpeg";
import classes from "./HomePage.module.css";
import Navbar from "../NavBar/Navbar";

const homePage = () => {
  return (
    <div>
      <Navbar />
      <img
        className={classes.IndexImage}
        src={indeximage}
        alt="backgroundImage"
      />
    </div>
  );
};

export default homePage;
