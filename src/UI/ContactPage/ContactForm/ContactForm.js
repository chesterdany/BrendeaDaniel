import React from "react";
import classes from "./ContactForm.module.css";
import Input from "../ContactForm/Input";

class ContactForm extends React.Component {
  state = {
    contactForm: {
      name: {
        value: "",
      },
      email: {
        value: "",
      },
      message: {
        value: "",
      },
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  inputChangeHandler = (e, identifier) => {
    const updatedState = { ...this.state.contactForm };
    const updatedValue = { ...updatedState[identifier] };
    updatedValue.value = e.target.value;
    updatedState[identifier] = updatedValue;
    this.setState({ contactForm: updatedState });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          inputtype="input"
          type="text"
          name="text"
          labelname="Name"
          changed={(e) => this.inputChangeHandler(e, "name")}
        />
        <Input
          inputtype="input"
          type="email"
          name="email"
          labelname="Email"
          changed={(e) => this.inputChangeHandler(e, "email")}
        />
        <Input
          inputtype="textarea"
          type="textarea"
          name="textarea"
          rows="4"
          labelname="Message"
          changed={(e) => this.inputChangeHandler(e, "message")}
        />
        <input
          type="submit"
          value="Send(Dummy)"
          className={classes.submitbtn}
        />
      </form>
    );
  }
}

export default ContactForm;
