import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import LoginPage from './auth/LoginPage';
import GithubUsers from './components/GithubUsers';
import PrivateRoute from './components/PrivateRoute';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={LoginPage} />
          <PrivateRoute exact path="/github-users" component={GithubUsers} />
        </div>
      </Router>
    );
  }
}

export default App;
