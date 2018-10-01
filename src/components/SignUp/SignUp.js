import React, { Component } from "react";
import "../styles/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Form extends Component {
  state = {
    firstName: null,
    lastName: null,
    password: null,
    email: null
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addUser(this.state);
  };

  render() {
    return (
      <div className="form">
        <h2>SIGN UP</h2>
        <form onSubmit={this.onSubmit}>
          {/* INPUT ROW */}
          <div className="form__input">
            <input
              type="text"
              name="firstName"
              required
              onChange={this.onChange}
            />
            <label htmlFor="firstName">First name</label>
          </div>
          {/* INPUT ROW */}
          <div className="form__input">
            <input
              type="text"
              name="lastName"
              required
              onChange={this.onChange}
            />
            <label htmlFor="lastName">Last name</label>
          </div>
          {/* INPUT ROW */}
          <div className="form__input">
            <input
              type="password"
              name="password"
              required
              onChange={this.onChange}
            />
            <label htmlFor="password">Password</label>
          </div>
          {/* INPUT ROW */}
          <div className="form__input">
            <input
              type="email"
              name="email"
              required
              onChange={this.onChange}
            />
            <label htmlFor="email">Email</label>
          </div>
          {/* INPUT ROW */}
          <div className="form__input__agreement">
            <input type="checkbox" name="agreement" id="agreement" required />
            <label htmlFor="agreement">
              I agree all statements in <a href="#">terms of service</a>
            </label>
          </div>
          {/* SUBMIT */}
          <input type="submit" value="JOIN" />
        </form>
        <div className="registered">
          <a href="#">Already registered</a>
        </div>
      </div>
    );
  }
}
export default Form;
