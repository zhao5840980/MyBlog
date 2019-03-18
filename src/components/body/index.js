import React, { Component } from 'react';
import Left from '../left';
import Middle from '../middles';
import { Route, Switch, Redirect } from 'react-router-dom';
import Guidang from '../../pages/guidang';
import Friendly from '../../pages/friendly';
import Right from '../../components/right';

import './body.scss';

export default class componentName extends Component {
  render() {
    return (
      <div className="body-wrap">
        <Left />

        <Switch>
          {console.log(this.props.match)}
          {/* <Route
            exact
            path="/home"
            render={() => <Redirect to="/home/middle" />}
          /> */}
          <Route
            path="/home/middle"
            render={() => {
              console.log('2222222222');
              return <Middle />;
            }}
          />
          <Route
            path="/home/guidang"
            render={() => {
              console.log('3333');
              return <Guidang />;
            }}
          />
          <Route path="/home/friendly" render={() => <Friendly />} />
          <Route component={Middle} />
        </Switch>
        <Right />
      </div>
    );
  }
}
