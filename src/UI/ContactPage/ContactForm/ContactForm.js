import React from "react";
import classes from "./ContactForm.module.css";

class ContactForm extends React.Component {
  // state = {  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={classes.label}>
          Name:
          <input
            type="text"
            // value={this.state.value}
            // onChange={this.handleChange}
          />
        </label>
        <label className={classes.label}>
          Email:
          <input type="email" />
        </label>
        <label className={classes.label}>
          Message:
          <textarea name="text" rows="5" className={classes.textarea} />
        </label>
        <input type="submit" value="Send" className={classes.submitbtn} />
      </form>
    );
  }
}

export default ContactForm;
