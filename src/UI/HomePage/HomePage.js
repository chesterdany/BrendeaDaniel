import React from "react";
import indeximage from "../../assests/images/indeximagemod.jpeg";
import classes from "./HomePage.module.css";
import Navbar from "../NavBar/Navbar";
import portret from "../../assests/images/daniel.png";

const homePage = () => {
  return (
    <React.Fragment>
      <img
        className={classes.IndexImage}
        src={indeximage}
        alt="backgroundImage"
      />
      <Navbar />
      <div className={classes.HomePage}>
        <div className={classes.Box1}>
          <img className={classes.Portret} src={portret} alt="daniel" />
        </div>
        <div className={classes.Box2}>
          <h1 className={classes.Introduction}>
            Hi, my name is Daniel and i'm a self taught web developer
          </h1>
        </div>
        <div className={classes.Box3}>
          <p>
            In the begining I started learning how to code just for fun but then
            I realized this is a very nice way to make awesome webpages and
            apps, so i begun working on my portofolio website....I still do :)
          </p>
          <p>
            Learning from my mistakes and searching for some answers on the web
            I discovered
            <a href="https://github.com/chesterdany"> Github </a>,
            <a href="https://stackoverflow.com/"> Stackoverflow </a>
            and the one that help me the most
            <a href="https://www.udemy.com"> Udemy </a>. Now I'm familiar with
            HTML5, CSS3, Javascript and React.js.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default homePage;
