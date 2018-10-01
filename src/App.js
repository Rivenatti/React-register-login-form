import React, { Component } from "react";

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
    this.state.users.filter(person => {
      person.email === user.email && person.password === user.password
        ? alert("logged in")
        : alert("not match");
    });
  };

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <SignIn checkUser={this.checkUser} />
        {/* <SignUp addUser={this.addUser} /> */}
      </div>
    );
  }
}

export default App;
