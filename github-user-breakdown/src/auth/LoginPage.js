import React from "react";
import { connect } from "react-redux";
// import { login } from "../actions";
import styled from 'styled-components';

const Wrapper = styled.div `
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

    button {
      width: 150px;
      margin: 10px auto;
      border: none;
      background-color: #9F86FF;
      cursor: pointer;
    }
  }
`

class LoginPage extends React.Component {
  state = {
    credentials: {
      username: "",
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

  render() {
    return (
      <Wrapper>
        <h1>Login To GitHub Users</h1>
        <form onSubmit={this.login}>
          <h3>Email</h3>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <h3>Password</h3>
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
          <button>Sign Up</button>
        </form>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({error, loggingIn }) => ({
  error,
  loggingIn
})

export default connect(
  mapStateToProps,
  { }
)(LoginPage);
