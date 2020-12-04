import React from "react";
import Navbar from "../NavBar/Navbar";
import classes from "./ProjectPage.module.css";
import Project from "./Project";
import shop from "../../assests/images/shop.png";
import todoList from "../../assests/images/todolist.png";
import solo from "../../assests/images/solo.png";
import whack from "../../assests/images/whackAMole.png";
import thin from "../../assests/images/tinDog.png";
import burger from "../../assests/images/burger.png";
import indeximage from "../../assests/images/indeximagemod.jpeg";

const projectPage = () => {
  return (
    <React.Fragment>
      <img
        className={classes.IndexImage}
        src={indeximage}
        alt="backgroundImage"
      />
      <Navbar />

      <div className={classes.ProjectPage}>
        <h1 className={classes.Header}>Projects</h1>
        <hr className={classes.Hr} />
        <div className={classes.Gallery}>
          <Project
            src={whack}
            apphref="https://chesterdany.github.io/Whack-a-mole/"
            sourcehref="https://github.com/chesterdany/Whack-a-mole"
          />
          <Project
            src={thin}
            apphref="https://chesterdany.github.io/TinDog-Start-master/"
            sourcehref="https://github.com/chesterdany/TinDog-Start-master"
          />
          <Project
            src={burger}
            apphref="https://burger-app-fd68d.web.app/"
            sourcehref="https://github.com/chesterdany/burger"
          />
          <Project
            src={shop}
            apphref="https://chesterdany.github.io/Portofoliu/Projects/dummyShop/index.html"
            sourcehref="https://github.com/chesterdany/Portofoliu/tree/master/Projects/dummyShop"
          />
          <Project
            src={todoList}
            apphref="https://chesterdany.github.io/Portofoliu/Projects/TodoListProject/index.html"
            sourcehref="https://github.com/chesterdany/Portofoliu/tree/master/Projects/TodoListProject"
          />
          <Project
            src={solo}
            apphref="https://chesterdany.github.io/Portofoliu/Projects/SoloGame/index.html"
            sourcehref="https://github.com/chesterdany/Portofoliu/tree/master/Projects/SoloGame"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default projectPage;
