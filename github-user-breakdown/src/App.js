import React, { Component } from "react";
// import Test from './components/Test';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginPage from "./auth/LoginPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Test /> */}
          <Route path="/login" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
