import React from "react";

const plink = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {" "}
      {props.name}{" "}
    </a>
  );
};

export default plink;
