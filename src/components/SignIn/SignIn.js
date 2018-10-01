import React, { Component } from "react";
import "../styles/style.css";

class Form extends Component {
  render() {
    return (
      <div className="form">
        <h2>SIGN IN</h2>
        <form>
          {/* INPUT ROW */}
          <div className="form__input">
            <input type="email" name="email" required />
            <label for="email">E-mail address</label>
          </div>
          {/* INPUT ROW */}
          <div className="form__input">
            <input type="password" name="password" required />
            <label for="password">Password</label>
          </div>

          {/* SUBMIT */}
          <input type="submit" value="Submit" />
        </form>
        <div className="registered">
          <a href="#">I'm already registered</a>
        </div>
      </div>
    );
  }
}
export default Form;
