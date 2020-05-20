import React from "react";
import Navbar from "../NavBar/Navbar";
import classes from "./ContactPage.module.css";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import CvButton from "./CvButton/cvButton";
import Plink from "../HomePage/Plink/pLink";
import ContactForm from "./ContactForm/ContactForm";
import indeximage from "../../assests/images/indeximagemod.jpeg";

const contactPage = () => {
  return (
    <React.Fragment>
      <img
        className={classes.IndexImage}
        src={indeximage}
        alt="backgroundImage"
      />
      <Navbar />

      <div className={classes.ContactPage}>
        <div className={classes.ContactDiv}>
          <div className={classes.ContactDetails}>
            <h2>Get in Touch</h2>
            <h4>daniel.brendea@yahoo.com</h4>
            <h4>(+40)755 935 052</h4>
            <h4>daniel.brendea</h4>
            <div className={classes.SocialDiv}>
              <h3>Social</h3>
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
            <CvButton className={classes.btn} />
          </div>
          <ContactForm />
        </div>
      </div>
    </React.Fragment>
  );
};

export default contactPage;
