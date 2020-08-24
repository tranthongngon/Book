/** @format */

import React, { Component } from "react";
import fire from "../Header/Fire";
import "../Login/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Footer from '../Footer/Footer'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      fireErrors: "",
      formTitle: "Login",
      loginBtn: true,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        this.setState({ fireErrors: error.message });
      });
  };
  register = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        this.setState({ fireErrors: error.message });
      });
  };

  getAction = (action) => {
    if (action === "reg") {
      this.setState({
        formTitle: "Resgister",
        loginBtn: false,
        fireErrors: "",
      });
    } else {
      this.setState({ formTitle: "Login", loginBtn: true, fireErrors: "" });
    }
  };

  render() {
    let errorNotification = this.state.fireErrors ? (
      <div className='Error'>{this.state.fireErrors}</div>
    ) : null;

    let submitBtn = this.state.loginBtn ? (
      <input
        className='loginBtn'
        type='submit'
        onClick={this.login}
        value='Enter'
      />
    ) : (
      <input
        className='loginBtn'
        type='submit'
        onClick={this.register}
        value='Register'
      />
    );

    let login_register = this.state.loginBtn ? (
      <button className='registerBtn' onClick={() => this.getAction("reg")}>
        Register
      </button>
    ) : (
      <button className='registerBtn' onClick={() => this.getAction("reg")}>
        Login
      </button>
    );

    return (
      <div className='login-register'>
        <Container>
          <Row className='witdh'>
            <Col md={{ span: 6, offset: 3 }}>
              <div className='form'>
                <div className='title'>{this.state.formTitle}</div>
                <div className='body-form'>
                  {errorNotification}
                  <form>
                    <p>Email</p>
                    <input
                      className='input'
                      type='text'
                      value={this.state.email}
                      onChange={this.handleChange}
                      name='email'
                    />

                    <p>Password</p>
                    <input
                      className='input'
                      type='password'
                      value={this.state.password}
                      onChange={this.handleChange}
                      name='password'
                    />
                    {submitBtn}
                  </form>
                  {login_register}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default Login;
