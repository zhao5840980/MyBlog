import React, { Component } from 'react';
import App from './App';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from './pages/home';
class RouterAll extends Component {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route path="/" exact render={() => <Redirect to="/home" />} />
            {/* <Route path="/home" component={Home} /> */}
            <Route
              path="/home"
              exact
              render={() => <Redirect to="/home/middle" />}
            />
            <Route path="/home" component={Home} />
          </Switch>
        </App>
      </Router>
    );
  }
}

export default RouterAll;
