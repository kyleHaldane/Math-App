import React, { Component } from "react";
import LoginBox from "../components/LoginBox";
import Banner from "../components/Banner";

class Login extends Component{
  state = {
    username: "",
    password: "",
    loggedIn: false
  };

  render() {
    return(
      <div>
          <Banner />?
          <LoginBox />
      </div>
    )
  }
}

export default Login;