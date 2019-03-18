import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import Home from './pages/home';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          <Route
            path="/home"
            component={() => {
              console.log(5555555);
              return <Home />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}
export default App;
