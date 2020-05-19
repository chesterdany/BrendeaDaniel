import React from "react";
import classes from "./ContactForm.module.css";
import Input from "../ContactForm/Input";

class ContactForm extends React.Component {
  state = {
    contactForm: {
      name: {
        value: "",
        inputType: "input",
        type: "text",
        labelName: "Name",
      },
      email: {
        value: "",
        inputType: "email",
        type: "email",
        labelName: "Email",
      },
      message: {
        value: "",
        inputType: "textarea",
        type: "text",
        labelName: "Message",
      },
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert("Your email was send!");
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
            elementConfig={formElement.config.type}
            elementName={formElement.config.labelName}
            changed={(e) => this.inputChangeHandler(e, formElement.id)}
          />
        ))}
        <input
          type="submit"
          value="Send(Dummy)"
          className={classes.submitbtn}
        />
      </form>
    );
    return form;
    // <form onSubmit={this.handleSubmit}>
    //   <Input
    //     inputtype="input"
    //     type="text"
    //     name="text"
    //     labelname="Name"
    //     changed={(e) => this.inputChangeHandler(e, "name")}
    //   />
    //   <Input
    //     inputtype="input"
    //     type="email"
    //     name="email"
    //     labelname="Email"
    //     changed={(e) => this.inputChangeHandler(e, "email")}
    //   />
    //   <Input
    //     inputtype="textarea"
    //     type="textarea"
    //     name="textarea"
    //     rows="4"
    //     labelname="Message"
    //     changed={(e) => this.inputChangeHandler(e, "message")}
    //   />
    //   <input
    //     type="submit"
    //     value="Send(Dummy)"
    //     className={classes.submitbtn}
    //   />
    // </form>
  }
}

export default ContactForm;
