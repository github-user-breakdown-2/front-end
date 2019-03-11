import React, { Component } from 'react';
import LoginPage from './auth/LoginPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/login' component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
