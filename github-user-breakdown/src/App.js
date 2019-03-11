import React, { Component } from 'react';
// import Test from './components/Test';
import LoginPage from './auth/LoginPage';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Test /> */}
      <LoginPage />
      </div>
    );
  }
}

export default App;
