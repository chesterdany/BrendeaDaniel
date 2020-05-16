import React from "react";
import Navbar from "../NavBar/Navbar";
import classes from "./ProjectPage.module.css";
import rgbGame from "../../assests/images/rgbGame.png";
import shop from "../../assests/images/shop.png";
import todoList from "../../assests/images/todolist.png";
import projectPlanner from "../../assests/images/projectPlaner.png";
import { FaGithub } from "react-icons/fa";

const projectPage = () => {
  return (
    <div className={classes.ProjectPage}>
      <Navbar />
      <h1 className={classes.Header}>Projects</h1>
      <hr className={classes.Hr} />
      <div className={classes.Gallery}>
        <div className={classes.ImageDiv}>
          <a
            href="https://chesterdany.github.io/Portofoliu/Projects/ColorGame/colorGame.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={rgbGame} alt="rgbGame" />
          </a>
          <a
            href="https://github.com/chesterdany/Portofoliu/tree/master/Projects/ColorGame"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.SourceCode}
          >
            <FaGithub /> View Code
          </a>
        </div>
        <div className={classes.ImageDiv}>
          <a
            href="https://chesterdany.github.io/Portofoliu/Projects/dummyShop/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={shop} alt="shop" />
          </a>
          <a
            href="https://github.com/chesterdany/Portofoliu/tree/master/Projects/dummyShop"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.SourceCode}
          >
            <FaGithub /> View Code
          </a>
        </div>
        <div className={classes.ImageDiv}>
          <a
            href="https://chesterdany.github.io/Portofoliu/Projects/TodoListProject/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={todoList} alt="todo" />
          </a>
          <a
            href="https://github.com/chesterdany/Portofoliu/tree/master/Projects/TodoListProject"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.SourceCode}
          >
            <FaGithub /> View Code
          </a>
        </div>
        <div className={classes.ImageDiv}>
          <a
            href="https://chesterdany.github.io/Portofoliu/Projects/ProjectPlanner/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={projectPlanner} alt="project" />
          </a>
          <a
            href="https://github.com/chesterdany/Portofoliu/tree/master/Projects/ProjectPlanner"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.SourceCode}
          >
            <FaGithub /> View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default projectPage;
