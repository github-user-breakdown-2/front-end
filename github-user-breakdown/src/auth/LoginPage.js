import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { login, register } from "../actions";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  max-width: 300px;
  margin: 20px auto;
  padding: 30px;
  form {
    display: flex;
    flex-direction: column;
    input {
      margin: 10px 0;
      font-size: 18px;
      border-radius: 5px;
      border: 2px solid #9f86ff;
    }
    button {
      border: 0;
      padding: 5px 0;
      font-size: 20px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      background: #9f86ff;
      color: white;
      transition: all.5s ease;
      margin-top: 20px;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background: #5933f0;
      }
    }
  }
`;

class LoginPage extends React.Component {
  state = {
    credentials: {
      email: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  // login = e => {
  //   e.preventDefault();
  //   this.props.login(this.state.credentials).then(() => {
  //     this.props.history.push("/github-users");
  //   });
  // };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials);
    setTimeout(() => this.props.history.push("/github-users"), 1000);
  };

  register = e => {
    e.preventDefault();
    this.props.register(this.state.credentials);
  };

  render() {
    return (
      <Wrapper>
        <h1>GitHub User Breakdown</h1>
        <form>
          <input
            type="text"
            name="email"
            value={this.state.credentials.email}
            onChange={this.handleChange}
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <button onClick={this.login}>
            {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Login"
            )}
          </button>
          <button onClick={this.register}>
            {this.props.registering ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Sign Up"
            )}
          </button>
          <p>No account? Enter an email and password then click the sign up button</p>
        </form>

        {this.props.registerSuccess ? alert('Successfully registered... go ahead and log in') : <div></div> }
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ error, loggingIn, registering, registerSuccess }) => ({
  error,
  loggingIn,
  registering,
  registerSuccess
});

export default connect(
  mapStateToProps,
  { login, register })(LoginPage);

