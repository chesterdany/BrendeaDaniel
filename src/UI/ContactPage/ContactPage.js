import React from "react";
import Navbar from "../NavBar/Navbar";
import Cv from "../../assests/cv/CV-BrendeaDaniel.pdf";

const contactPage = () => {
  return (
    <div>
      <Navbar />
      <a href={Cv} target="_blank" rel="noopener noreferrer">
        <button>View CV</button>
      </a>
    </div>
  );
};

export default contactPage;
