import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Nav from './nav/Nav'
import LoginPage from './auth/LoginPage';
import UserList from './components/UserList';
import PrivateRoute from './components/PrivateRoute';
import User from './components/User';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path='/' component={LoginPage} />
          <PrivateRoute path='/github-users/:user' component={User} />
          <PrivateRoute exact path="/github-users" component={UserList} />
        </div>
      </Router>
    );
  }
}

export default App;
