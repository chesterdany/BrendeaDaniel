import React from "react";
import Navbar from "../NavBar/Navbar";
import classes from "./ProjectPage.module.css";
import Project from "./Project";
import solo from "../../assests/images/solo.png";
import ecommerce from "../../assests/images/ecommerce.png";
import whack from "../../assests/images/whackAMole.png";
import weather from "../../assests/images/weather-app.png";
import burger from "../../assests/images/burger.png";
import indeximage from "../../assests/images/indeximagemod.jpeg";
import memories from "../../assests/images/memories.png";
import memoryGame from "../../assests/images/memory.png";

const projectPage = () => {
  return (
    <React.Fragment>
      <img className={classes.IndexImage} src={indeximage} alt="backgroundImage" />
      <Navbar />

      <div className={classes.ProjectPage}>
        <h1 className={classes.Header}>Projects</h1>
        <hr className={classes.Hr} />
        <div className={classes.Gallery}>
          <Project
            src={ecommerce}
            apphref="https://test-ecommerce22.netlify.app/"
            sourcehref="https://github.com/chesterdany/e-commerce-"
          />
          <Project
            src={memories}
            apphref="https://chesterdany.github.io/memories-app/"
            sourcehref="https://github.com/chesterdany/memories-app"
          />
          <Project
            src={memoryGame}
            apphref="https://memory-game-dny.netlify.app/"
            sourcehref="https://github.com/chesterdany/magic-memory"
          />

          <Project
            src={weather}
            apphref="https://weather-pwaapp.netlify.app/"
            sourcehref="https://github.com/chesterdany/weather-pwa"
          />
          <Project
            src={burger}
            apphref="https://burger-app-fd68d.web.app/"
            sourcehref="https://github.com/chesterdany/burger"
          />
          <Project
            src={whack}
            apphref="https://chesterdany.github.io/Whack-a-mole/"
            sourcehref="https://github.com/chesterdany/Whack-a-mole"
          />
          <Project
            src={solo}
            apphref="https://chesterdany.github.io/solo-app/"
            sourcehref="https://github.com/chesterdany/solo-app"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default projectPage;
