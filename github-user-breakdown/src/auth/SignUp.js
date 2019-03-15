import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { login, register } from "../actions";
import styled from "styled-components";


const Wrapper = styled.div`
  margin: 0 auto;
  width: 308px;
`;

const H1 = styled.h1`
    font-size: 24px;
    font-weight: 300;
    letter-spacing: -.5px;
    text-align: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #d8dee2;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    width: 85%;

    p {
      font-size: 14px;
      font-weight: 600;
      margin: 20px 0 10px 0;
    }

    input {
      font-size: 16px;
      border-radius: 3px;
      border: 1px solid #d1d5da;
      height: 30px;
      box-shadow: inset 0 1px 2px rgba(27,31,35,.075);

      &:focus {
        border-color: #2188ff;
        box-shadow: inset 0 1px 2px rgba(27,31,35,.075), 0 0 0 0.2em rgba(3,102,214,.3);
        outline: none;
      }
    }
    button {
      margin: 20px 0;
      cursor: pointer;
      height: 35px;
      border-radius: 3px;
      border: 1px solid #9882ef;
      background-image: linear-gradient(-180deg,#937af3,#7759ea 90%);
      color: white;
      font-weight: 800;
      font-size: 14px;

      &:hover {
        border: 1px solid #5738d4;
        background-image: linear-gradient(-180deg,#957aff,#6845ef 90%);
      }
    }
  }
`;

const CreateDiv = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #d8dee2;
  align-items: center;
  padding: 4px 0;
  margin-top: 16px;
  font-size: 14px;

  a {
    color: #0366d6;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
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
    this.props
    .login(this.state.credentials);
    setTimeout(() => this.props.history.push('/github-users'), 1000);
    
  };

  register = e => {
    e.preventDefault();
    this.props.register(this.state.credentials);
  };

  render() {
    return (
      <Wrapper>
        <H1>Sign up for GitHub Users</H1>
        <Form>
          <form>
            <p>Email address</p>
            <input
              type="text"
              name="email"
              value={this.state.credentials.email}
              onChange={this.handleChange}
              required
            />
             <p>Password</p>
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
              required
            />
            <button onClick={this.login}>
              {this.props.loggingIn ? (
                <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
              ) : (
                "Sign up"
              )}
            </button>
            {/* <button onClick={this.register}>
              {this.props.registering ? (
                <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
              ) : (
                "Sign Up"
              )}
            </button> */}
          </form>
        </Form>
        <CreateDiv>
          <p>Already have an account? <a href="">Login.</a></p>
        </CreateDiv>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ error, loggingIn, registering }) => ({
  error,
  loggingIn,
  registering
});

export default connect(
  mapStateToProps,
  { login, register }
)(LoginPage);