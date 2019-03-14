import React from 'react';
import { connect } from 'react-redux';
import { login, register } from '../actions';
import styled from 'styled-components';

// ************* Styled components *************

// main container
const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
`;

// login / register container
const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 300px; 
  background: white;
  margin-top: 20px;
  border-radius: 3px;
  text-align: center;
`;

const FormDiv = styled.form` 
  width: 300px;
  padding: 20px;
`;
 

const Button = styled.button`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  border-raidus: 5px;
`;

// ************* Login page *************
class LoginPage extends React.Component {
  state = {
    credentials: {
      email: '',
      password: ''
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

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials)
    this.props.history.push('/github-users')
  };

  register = e => {
    e.preventDefault();
    this.props.register(this.state.credentials)
  };

  render() {
    return (
      <WrapperDiv>

        {/* SIGN IN */}
        <LoginDiv>
          <FormDiv onSubmit={this.login}>
            <h2>Sign in</h2>
            <h3>Email address</h3>
            <Input
              type="text"
              name="email"
              value={this.state.credentials.email}
              onChange={this.handleChange}
            />
            <h3>Password</h3>
            <Input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <Button>Sign in</Button>
          </FormDiv>
        </LoginDiv>

        {/* REGISTER */}
        <LoginDiv>
          <FormDiv onSubmit={this.register}>
            <h2>Create an account</h2>
            <h3>Email address</h3>
            <Input
              type="text"
              name="email"
              value={this.state.credentials.email}
              onChange={this.handleChange}
            />
            <h3>Password</h3>
            <Input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <Button>Create an account</Button>
          </FormDiv>
        </LoginDiv>
      </WrapperDiv>
    );
  }
}

export default connect(
  null,
  { login, register }
)(LoginPage);



