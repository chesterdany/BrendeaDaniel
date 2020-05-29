import React from "react";
import classes from "./ContactForm.module.css";
import Input from "../ContactForm/Input";
import Axios from "axios";

class ContactForm extends React.Component {
  state = {
    contactForm: {
      name: {
        value: "",
        inputType: "input",
        inputConfig: {
          type: "text",
        },
        labelName: "Name",
        valid: false,
      },
      email: {
        value: "",
        inputType: "email",
        inputConfig: {
          type: "email",
        },
        labelName: "Email",
        valid: false,
      },
      message: {
        value: "",
        inputType: "textarea",
        inputConfig: {
          type: "text",
          rows: "5",
        },
        labelName: "Message",
        valid: false,
      },
    },
    submitted: false,
    submitable: false,
  };

  checkValidity = (value) => {
    let isValid = false;
    if (value !== "") {
      isValid = true;
    }
    return isValid;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const message = {
      name: this.state.contactForm.name.value,
      email: this.state.contactForm.email.value,
      message: this.state.contactForm.message.value,
    };
    Axios.post("/messages.json", message);
    this.setState({ submitted: true });
  };

  inputChangeHandler = (e, identifier) => {
    const updatedState = { ...this.state.contactForm };
    const updatedValue = { ...updatedState[identifier] };
    updatedValue.value = e.target.value;
    updatedValue.valid = this.checkValidity(updatedValue.value);
    updatedState[identifier] = updatedValue;

    let formIsValid = true;
    for (const identifier in updatedState) {
      formIsValid = updatedState[identifier].valid && formIsValid;
    }
    this.setState({ contactForm: updatedState, submitable: formIsValid });
  };

  render() {
    const formElementArray = [];
    for (const key in this.state.contactForm) {
      formElementArray.push({
        id: key,
        config: this.state.contactForm[key],
      });
    }

    let form = (
      <form onSubmit={this.handleSubmit}>
        {formElementArray.map((formElement) => (
          <Input
            key={formElement.id}
            inputType={formElement.config.inputType}
            elementConfig={formElement.config.inputConfig}
            elementName={formElement.config.labelName}
            changed={(e) => this.inputChangeHandler(e, formElement.id)}
          />
        ))}
        <input
          disabled={!this.state.submitable || this.state.submitted}
          type="submit"
          value="Send"
          className={classes.submitbtn}
        />
      </form>
    );
    return (
      <div>
        {this.state.submitted ? (
          <p className={classes.sendMessagge}>
            Your message was send! Thank you!
          </p>
        ) : null}
        {form}
      </div>
    );
  }
}

export default ContactForm;
