import React, { Component } from "react";
import "../styles/style.css";
import { NavLink } from "react-router-dom";
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
    this.props.checkUser(this.state);
  };

  render() {
    return (
      <div className="form">
        <h2>SIGN IN</h2>
        <form onSubmit={this.onSubmit}>
          {/* INPUT ROW */}
          <div className="form__input">
            <input type="text" name="email" required onChange={this.onChange} />
            <label htmlFor="email">E-mail address</label>
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

          {/* SUBMIT */}
          <input type="submit" value="ENTER" />
        </form>
        <div className="registered">
          <NavLink to="/sign-up">Create an account</NavLink>
        </div>
      </div>
    );
  }
}
export default Form;
