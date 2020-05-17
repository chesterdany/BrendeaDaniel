import React from "react";
import Navbar from "../NavBar/Navbar";
import CvButton from "./CvButton/cvButton";
import classes from "./ContactPage.module.css";

const contactPage = () => {
  return (
    <div className={classes.ContactPage}>
      <Navbar />

      <CvButton />
    </div>
  );
};

export default contactPage;
