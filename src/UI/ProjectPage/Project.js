import React from "react";
import { FaGithub } from "react-icons/fa";
import classes from "./Project.module.css";

const project = (props) => {
  return (
    <div className={classes.ImageDiv}>
      <a href={props.apphref} target="_blank" rel="noopener noreferrer">
        <img src={props.src} alt={props.src} />
        {/* <span className={classes.tooltip}>Try it!</span> */}
      </a>
      <a href={props.sourcehref} target="_blank" rel="noopener noreferrer">
        <div className={classes.gitdiv}>
          <FaGithub className={classes.github} />
          <button className={classes.btn}>View Source Code</button>
        </div>
      </a>
    </div>
  );
};

export default project;
