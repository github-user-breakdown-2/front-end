import React, { Component } from "react";
import GithubUsers from "./components/GithubUsers";
import { BrowserRouter as Router, Route} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./auth/LoginPage";
import User from './components/User'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LoginPage} />
          <PrivateRoute path='/github-users/:user' component={User}/>
          <PrivateRoute exact path="/github-users/" component={GithubUsers} />
        </div>
      </Router>
    );
  }
}

export default App;