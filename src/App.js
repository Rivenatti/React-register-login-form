import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

class App extends Component {
  state = {
    users: [
      {
        firstName: "marcin",
        lastName: "s",
        password: "marcin",
        email: "m@s.pl"
      },
      {
        firstName: "marcin",
        lastName: "s",
        password: "marcins",
        email: "m@s.pl"
      }
    ]
  };

  addUser = user => {
    const newUserList = [...this.state.users, user];
    this.setState({
      users: newUserList
    });
    alert("User has ben saved in the state.");
  };

  checkUser = user => {
    this.state.users.every(person => {
      return person.email === user.email && person.password === user.password
        ? alert("Success")
        : alert("Error");
    });
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
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
