import React from "react";

const plink = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {" "}
      {props.name}
      {props.children}{" "}
    </a>
  );
};

export default plink;
