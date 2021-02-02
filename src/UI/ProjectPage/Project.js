import React from "react";
import { FaGithub } from "react-icons/fa";
import { TiEye } from "react-icons/ti";
import classes from "./Project.module.css";

const project = (props) => {
  return (
    <div className={classes.project}>
      <div className={classes.ImageDiv}>
        <a href={props.apphref} target="_blank" rel="noopener noreferrer">
          <img src={props.src} alt={props.src} />
        </a>
      </div>
      <div className={classes.projectBtns}>
        <a
          href={props.apphref}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.btnLight}
        >
          <TiEye className={classes.github} /> Project
        </a>
        <a
          href={props.sourcehref}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.btnBlack}
        >
          <FaGithub className={classes.github} /> Github
        </a>
      </div>
    </div>
  );
};

export default project;
