import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav>
      logo
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
