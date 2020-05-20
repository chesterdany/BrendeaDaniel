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
      },
      email: {
        value: "",
        inputType: "email",
        inputConfig: {
          type: "email",
        },
        labelName: "Email",
      },
      message: {
        value: "",
        inputType: "textarea",
        inputConfig: {
          type: "text",
          rows: "5",
        },
        labelName: "Message",
      },
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // contact form validation
    const message = {
      name: this.state.contactForm.name.value,
      email: this.state.contactForm.email.value,
      message: this.state.contactForm.message.value,
    };
    Axios.post("/messages.json", message);
    // show custom alert
    alert("Message send!");
  };

  inputChangeHandler = (e, identifier) => {
    const updatedState = { ...this.state.contactForm };
    const updatedValue = { ...updatedState[identifier] };
    updatedValue.value = e.target.value;
    updatedState[identifier] = updatedValue;
    this.setState({ contactForm: updatedState });
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
        <input type="submit" value="Send" className={classes.submitbtn} />
      </form>
    );
    return form;
  }
}

export default ContactForm;
