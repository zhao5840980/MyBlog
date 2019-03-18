import React, { Component } from 'react';
import { Icon } from 'antd';
import './myClock.scss';

function getDate() {
  let totaltimer = new Date();
  var day = totaltimer.getDate();
  var month = totaltimer.getMonth() + 1;
  var year = totaltimer.getFullYear();
  if (String(month).length < 2) {
    month = '0' + month;
  } else {
    month = month;
  }
  if (String(day).length < 2) {
    day = '0' + day;
  } else {
    day = day;
  }
  var yyyymmdd = year + '-' + month + '-' + day;
  return yyyymmdd;
}
class MyClock extends Component {
  constructor(opt) {
    super(opt);
    this.state = {
      now: new Date().toLocaleTimeString(),
      riqi: getDate()
    };
  }
  componentDidMount() {
    this.setState({
      timer: setInterval(() => {
        this.setState({ now: new Date().toLocaleTimeString() });
      }, 1000)
    });
  }
  componentWillUnmount() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }
  }
  render() {
    return (
      <div className="timer-time">
        <Icon
          type="hourglass"
          className="timer-icon"
          rotate={180}
          style={{ fontSize: '18px' }}
          spin
        />
        <p className="timer-wrap">
          {this.state.riqi}
          {this.state.now}
        </p>
      </div>
    );
  }
}
export default MyClock;
