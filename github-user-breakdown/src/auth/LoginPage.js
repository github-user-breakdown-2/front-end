import React from 'react';
import { connect } from 'react-redux';
import { login, register } from '../actions';

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
  };

  register = e => {
    e.preventDefault();
    this.props.register(this.state.credentials)
  };

  render() {
    return (
      <div>
        {/* Sign in section */}
        <form onSubmit={this.login}>
          <h1> Sign in to Github-User-Breakdown </h1>
          <h3>Email address</h3>
          <input
            type="text"
            name="email"
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
          <button>Sign in</button>
        </form>

        {/* Create account section */}
        <form onSubmit={this.register}>
          <h1> Create an account </h1>
          <h3>Email address</h3>
          <input
            type="text"
            name="email"
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
          <button>Create an account</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { login, register }
)(LoginPage);



