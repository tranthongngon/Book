/** @format */

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Header/Header.css";
import fire from "../Header/Fire";


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      btn: "Login",
      user: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    alert("this is name you searched " + this.state.value);
  }
  componentDidMount() {
    this.autListener();
  }
  autListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user, btn: "Logout" });
      } else {
        this.setState({ user: null, btn: "Login" });
      }
    });
  }
  logout = () => {
    fire.auth().signOut();
  };
  render() {
    return (
      <div>
        <Navbar bg='light' expand='lg' className='main-menu'>
          <div className='container'>
            <Navbar.Brand className='col-md-2 lo-go'>
              <Link to='/'>Book-Store</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav' className='col-md-10'>
              <Nav className='mr-justify col-md-6 menu-book'>
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/about'>About</Link>
                <NavDropdown title='Type' id='basic-nav-dropdown'>
                  <NavDropdown.Item>
                    <Link to='/action'>Action</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='/stoies'>Stories</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='/novel'>Novel</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='/technology'>Technology</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav className='col-md-6'>
                <Form inline onSubmit={this.handleSubmit}>
                  <input
                    type='text'
                    placeholder='Search'
                    className='search'
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                  <Button
                    variant='outline-success'
                    type='submit'
                    value='Submit'>
                    Search
                  </Button>
                </Form>
                <Link to='/login'>
                  <Button className='login' onClick={this.logout}>
                    <i className='fa fa-user-circle user-icon'></i>
                    {this.state.btn}
                  </Button>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;
