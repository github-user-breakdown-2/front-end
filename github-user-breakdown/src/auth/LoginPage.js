import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { login } from "../actions";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  width: 400px;
  margin: 20px auto;
  padding: 30px;

  form {
    display: flex;
    flex-direction: column;

    input {
      margin: 10px 0;
      font-size: 18px;
    }

    button {
      margin: 10px 0;
      border: none;
      background-color: #9f86ff;
      cursor: pointer;
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
  //     this.props.history.push("/friends-list");
  //   });
  // };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials);
  };

  register = e => {
    e.preventDefault();
    this.props.register(this.state.credentials)
  }

  render() {
    return (
      <Wrapper>
        <h1>Login To GitHub Users</h1>
        <form onSubmit={this.login}>
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
          <button>
            {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Login"
            )}
          </button>
          <button>Sign Up</button>
        </form>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ error, loggingIn }) => ({
  error,
  loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(LoginPage);
