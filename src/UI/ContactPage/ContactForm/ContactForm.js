import React from "react";
import classes from "./ContactForm.module.css";
import Input from "../ContactForm/Input";

class ContactForm extends React.Component {
  state = {};

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input inputtype="input" type="text" name="text" labelname="Name:" />
        <Input inputtype="email" type="email" name="email" labelname="Email:" />
        <Input
          inputtype="textarea"
          type="textarea"
          name="textarea"
          rows="4"
          labelname="Message:"
        />
        <input type="submit" value="Send" className={classes.submitbtn} />
      </form>
    );
  }
}

export default ContactForm;
