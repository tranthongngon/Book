/** @format */
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import React, { Component} from "react";
import Home from "./Home/Home";
import LoginRegister from "./Home/Login/LoginRegister";
import Contact from "./Contact/Contact";
import Header from "./Home/Header/Header";
import About from "./About/About";

class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={LoginRegister} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About}/>
      </Router>
    );
  }
}

export default App;
