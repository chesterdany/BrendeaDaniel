import React from "react";
import cv from "../../../assests/cv/CV-DanielBrendea.pdf";
import classes from "./cvButton.module.css";

const cvButton = (props) => {
  return (
    <div className={classes.cvdivlink}>
      <a href={cv} target="_blank" rel="noopener noreferrer">
        - View CV -
      </a>
    </div>
  );
};

export default cvButton;
