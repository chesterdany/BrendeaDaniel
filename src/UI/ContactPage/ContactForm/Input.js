import React from "react";
import classes from "./Input.module.css";

const input = (props) => {
  let inputElement = null;
  switch (props.inputType) {
    case "input":
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          onChange={props.changed}
        />
      );
      break;
    case "email":
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={classes.InputElement}
          {...props.elementConfig}
          rows="5"
          onChange={props.changed}
        />
      );
      break;

    default:
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          onChange={props.changed}
        />
      );
      break;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.elementName}</label>
      {inputElement}
    </div>
  );
};

export default input;
