import React from "react";
import Navbar from "../NavBar/Navbar";
import classes from "./ContactPage.module.css";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import CvButton from "./CvButton/cvButton";
import Plink from "../HomePage/Plink/pLink";

const contactPage = () => {
  return (
    <div className={classes.ContactPage}>
      <Navbar />
      <div className={classes.ContactDiv}>
        <div className={classes.ContactDetails}>
          <h3>GET IN TOUCH</h3>
          <h4>Email</h4>
          <h4>Phone</h4>
          <h4>Address</h4>
          <CvButton />
        </div>
        <div className={classes.ContactForm}>Form</div>
      </div>
      <div className={classes.SocialDiv}>
        <Plink href="https://github.com/chesterdany">
          <FaGithub className={classes.link} />
        </Plink>
        <Plink href="https://www.linkedin.com/in/daniel-brendea-a261a81a2/">
          <FaLinkedin className={classes.link} />
        </Plink>
        <Plink href="https://www.facebook.com/chester.dani.1/">
          <FaFacebook className={classes.link} />
        </Plink>
      </div>
    </div>
  );
};

export default contactPage;
