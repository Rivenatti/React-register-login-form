import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import NotFound from "./components/NotFound/NotFound";

class App extends Component {
  state = {
    users: []
  };

  addUser = user => {
    const userExists = this.state.users.filter(person => {
      return person.email === user.email;
    });

    if (userExists.length === 0) {
      const newUserList = [...this.state.users, user];
      this.setState({
        users: newUserList
      });
      alert("User has ben saved in the state. You can sign in now.");
      return true;
    } else {
      alert("Such user already exists.");
      return false;
    }
  };

  checkUser = user => {
    const attempt = this.state.users.filter(person => {
      return (
        person.email.toLowerCase() === user.email.toLowerCase() &&
        person.password === user.password
      );
    });

    if (attempt.length === 1) {
      alert("Signed in successfully");
    } else {
      alert("Sign in failed, try again.");
    }
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <SignIn checkUser={this.checkUser} />
            </Route>
            <Route path="/sign-up">
              <SignUp addUser={this.addUser} />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
