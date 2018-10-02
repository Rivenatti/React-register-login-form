import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import "../styles/style.css";

class Form extends Component {
  state = {
    firstName: "",
    firstNameError: "",
    lastName: "",
    lastNameError: "",
    password: "",
    passwordError: "",
    confirmPassword: "",
    confirmPasswordError: "",
    email: "",
    emailError: ""
  };

  validate(input) {
    const name = input.target.name;
    const value = input.target.value;

    const nameRegEx = RegExp(/^[A-Z]\w{3,18}$/);

    const passwordRegEx = RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    );

    const emailRegEx = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

    switch (name) {
      // ------------- FIRST NAME -------------
      case "firstName":
        if (nameRegEx.test(value)) {
          this.setState({
            firstName: value,
            firstNameError: ""
          });
        } else if (value === "") {
          this.setState({ firstNameError: "" });
        } else {
          this.setState({
            firstNameError:
              "First name must start with uppercase, be alphanumeric and contain 4 to 18 characters"
          });
        }

        break;

      // ------------- LAST NAME -------------
      case "lastName":
        if (nameRegEx.test(value)) {
          this.setState({
            lastName: value,
            lastNameError: ""
          });
        } else if (value === "") {
          this.setState({ lastNameError: "" });
        } else {
          this.setState({
            lastNameError:
              "Last name must start with uppercase, be alphanumeric and contain 4 to 18 characters"
          });
        }

        break;

      // ------------- EMAIL -------------
      case "email":
        if (emailRegEx.test(value)) {
          this.setState({
            email: value,
            emailError: ""
          });
        } else if (value === "") {
          this.setState({ emailError: "" });
        } else {
          this.setState({
            emailError: "Invalid email"
          });
        }

        break;

      // ------------- PASSWORD -------------
      case "password":
        if (passwordRegEx.test(value)) {
          this.setState({
            password: value,
            passwordError: ""
          });
        } else if (value === "") {
          this.setState({ passwordError: "" });
        } else {
          this.setState({
            passwordError:
              "Password must contain at least: 8 characters, uppercase and lowercase letter and a number"
          });
        }

        break;

      // ------------- CONFIRM PASSWORD -------------
      case "confirmPassword":
        if (value === this.state.password) {
          this.setState({
            confirmPassword: value,
            confirmPasswordError: ""
          });
        } else if (value === "") {
          this.setState({ confirmPasswordError: "" });
        } else if (this.state.password === "") {
          this.setState({
            confirmPasswordError: "Fill in the password, first."
          });
        } else {
          this.setState({ confirmPasswordError: "Passwords don't match" });
        }

        break;

      // ------------- DEFAULT -------------
      default:
        return null;
    }
  }

  onChange = e => {
    this.validate(e);
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
          {/* FIRST NAME INPUT ROW */}
          <div className="form__input">
            <input
              type="text"
              name="firstName"
              required
              onChange={this.onChange}
              autoComplete="off"
            />
            <label htmlFor="firstName">First name</label>
            <span className="error">{this.state.firstNameError}</span>
          </div>
          {/* LAST NAME INPUT ROW */}
          <div className="form__input mt-20">
            <input
              type="text"
              name="lastName"
              required
              onChange={this.onChange}
              autoComplete="off"
            />
            <label htmlFor="lastName">Last name</label>
            <span className="error">{this.state.lastNameError}</span>
          </div>

          {/* EMAIL INPUT ROW */}
          <div className="form__input mt-20">
            <input
              type="text"
              name="email"
              required
              onChange={this.onChange}
              autoComplete="off"
            />
            <label htmlFor="email">Email</label>
            <span className="error">{this.state.emailError}</span>
          </div>
          {/* PASSWORD INPUT ROW */}
          <div className="form__input mt-20">
            <input
              type="password"
              name="password"
              required
              onChange={this.onChange}
              autoComplete="off"
            />
            <label htmlFor="password">Password</label>
            <span className="error">{this.state.passwordError}</span>
          </div>
          {/* CONFIRM PASSWORD INPUT ROW */}
          <div className="form__input mt-20">
            <input
              type="password"
              name="confirmPassword"
              required
              onChange={this.onChange}
              autoComplete="off"
            />
            <label htmlFor="confirmPassword">Confirm password</label>
            <span className="error">{this.state.confirmPasswordError}</span>
          </div>
          {/* AGREEMENT INPUT ROW */}
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
