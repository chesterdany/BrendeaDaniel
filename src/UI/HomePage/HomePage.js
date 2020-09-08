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
        <div className={classes.Introduction}>
          <p>Hi! My name is</p>
          <h1>
            Daniel <span>Brendea</span>
          </h1>
          <hr />
          <p>Front-End Developer</p>
        </div>
        <div className={classes.Box3}>
          <p>
            In the beginning, I started learning how to code just for fun but
            then I realized this is a very nice way to make awesome webpages and
            apps, so I have begun working on my portfolio website...I still do
            :)
          </p>
          <p>
            Learning from my mistakes and searching for some answers on the web
            I discovered
            <Plink href="https://github.com/chesterdany" name="Github" />,
            <Plink href="https://stackoverflow.com/" name="Stackoverflow" /> and
            the one that helped me the most
            <Plink href="https://www.udemy.com" name="Udemy" />. Now I'm
            familiar with HTML5, CSS3, Sass, Javascript and React.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default homePage;
