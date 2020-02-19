import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/test" component={Test} />
        </Wrapper>
        <Footer />
      </div>
  </div>
  );
}


export default App;
