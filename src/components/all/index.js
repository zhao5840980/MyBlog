import React, { Component, Fragment } from 'react';
import Wrap from '../wraps';
import './all.scss';
// import { Route, Redirect, Switch } from 'react-router-dom';
class All extends Component {
  render() {
    return (
      <Fragment>
        <Wrap />
        <Wrap />
        <Wrap />
      </Fragment>
    );
  }
}

export default All;
