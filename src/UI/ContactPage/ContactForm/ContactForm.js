import React from "react";
import classes from "./ContactForm.module.css";

class ContactForm extends React.Component {
  state = {};

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={classes.label}>
          Name:
          <input
            type="text"
            value={this.state.name}
            // onChange={this.handleChange}
          />
        </label>
        <label className={classes.label}>
          Email:
          <input type="email" value={this.state.email} />
        </label>
        <label className={classes.label}>
          Message:
          <textarea
            name="text"
            rows="5"
            className={classes.textarea}
            value={this.state.message}
          />
        </label>
        <input type="submit" value="Send" className={classes.submitbtn} />
      </form>
    );
  }
}

export default ContactForm;
