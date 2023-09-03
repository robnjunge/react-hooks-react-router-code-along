import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import Messages from "./Messages";
import SignUp from "./SignUp";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
      <Route path="/about">
      <About />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route exact path="/signup">
      <SignUp />
    </Route>
    <Route exact path="/messages">
      <Messages />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
      </Switch>
    </div>
  );
}

export default App;