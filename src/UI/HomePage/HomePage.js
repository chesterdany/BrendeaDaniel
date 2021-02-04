import React from "react";
import indeximage from "../../assests/images/indeximagemod.jpeg";
import classes from "./HomePage.module.css";
import Navbar from "../NavBar/Navbar";
import portret from "../../assests/images/daniel.png";
// import Plink from "./Plink/pLink";

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
            <span>Brendea</span> Daniel
          </h1>
          <hr />
          <p>Entry-Level Web Developer</p>
        </div>
        <div className={classes.Box3}>
          <p id="description">
            {/* In the beginning, I started learning how to code just for fun, but
            then I realized this is a very nice way to make awesome webpages and
            apps, so I have begun working on my portfolio website... I still do!
            Learning from my mistakes and searching for some answers on the web
            I discovered Github, Stackoverflow and the one that helped me the
            most Udemy. Now I'm familiar with HTML5, CSS3, Sass, Javascript and
            React. */}
            A self-taught web developer, passionate about programming in
            general, looking for an opportunity to learn new technologies from
            an experienced developer team. I'm familiar with HTML5, CSS3, Sass,
            Javascript and React.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default homePage;
