import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import "../styles/style.css";

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
    return <Redirect to="/" />;
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
            <input type="text" name="email" required onChange={this.onChange} />
            <label htmlFor="email">Email</label>
          </div>
          {/* INPUT ROW */}
          <div className="form__input__agreement">
            <input type="checkbox" name="agreement" id="agreement" required />
            <label htmlFor="agreement">
              I agree all statements in <span>terms of service</span>
            </label>
          </div>
          {/* SUBMIT */}
          <input type="submit" value="JOIN" />
        </form>
        <div className="registered">
          <NavLink to="/">Already registered</NavLink>
        </div>
      </div>
    );
  }
}
export default Form;
