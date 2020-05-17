import React from "react";
import indeximage from "../../assests/images/indeximagemod.jpeg";
import classes from "./HomePage.module.css";
import Navbar from "../NavBar/Navbar";
import portret from "../../assests/images/daniel.png";
import Plink from "./Plink/pLink";

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
            I'm Daniel a self-taught web developer
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
            <Plink href="https://github.com/chesterdany" name="Gitgub" />,
            <Plink href="https://stackoverflow.com/" name="Stackoverflow" />
            and the one that help me the most
            <Plink href="https://www.udemy.com" name="Udemy" />. Now I'm
            familiar with HTML5, CSS3, Javascript and React.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default homePage;
