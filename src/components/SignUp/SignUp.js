import React, { Component } from "react";
import "../styles/style.css";

class Form extends Component {
  render() {
    return (
      <div className="form">
        <h2>SIGN UP</h2>
        <form>
          {/* INPUT ROW */}
          <div className="form__input">
            <input type="text" name="firstName" required />
            <label for="firstName">First name</label>
          </div>
          {/* INPUT ROW */}
          <div className="form__input">
            <input type="text" name="lastName" required />
            <label for="lastName">Last name</label>
          </div>
          {/* INPUT ROW */}
          <div className="form__input">
            <input type="password" name="password" required />
            <label for="password">Password</label>
          </div>
          {/* INPUT ROW */}
          <div className="form__input">
            <input type="email" name="email" required />
            <label for="email">Email</label>
          </div>
          {/* INPUT ROW */}
          <div className="form__input__agreement">
            <input type="checkbox" name="email" id="email" />
            <label htmlFor="email">
              I agree all statements in <a href="#">terms of service</a>
            </label>
          </div>
          {/* SUBMIT */}
          <input type="submit" value="Sign Up" />
        </form>
        <div className="registered">
          <a href="#">Create an account</a>
        </div>
      </div>
    );
  }
}
export default Form;
