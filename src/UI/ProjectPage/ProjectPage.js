import React from "react";
import Navbar from "../NavBar/Navbar";
import classes from "./ProjectPage.module.css";
import Project from "./Project";
import rgbGame from "../../assests/images/rgbGame.png";
import shop from "../../assests/images/shop.png";
import todoList from "../../assests/images/todolist.png";
import projectPlanner from "../../assests/images/projectPlaner.png";

const projectPage = () => {
  return (
    <div className={classes.ProjectPage}>
      <Navbar />
      <h1 className={classes.Header}>Projects</h1>
      <hr className={classes.Hr} />
      <div className={classes.Gallery}>
        <Project
          src={rgbGame}
          apphref="https://chesterdany.github.io/Portofoliu/Projects/ColorGame/colorGame.html"
          sourcehref="https://github.com/chesterdany/Portofoliu/tree/master/Projects/ColorGame"
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
          src={projectPlanner}
          apphref="https://chesterdany.github.io/Portofoliu/Projects/ProjectPlanner/index.html"
          sourcehref="https://github.com/chesterdany/Portofoliu/tree/master/Projects/ProjectPlanner"
        />
      </div>
    </div>
  );
};

export default projectPage;
