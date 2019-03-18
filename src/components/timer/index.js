import React, { Component } from 'react';
import TimePicker from 'react-times';

// use material theme
import 'react-times/css/material/default.css';
// or you can use classic theme
import 'react-times/css/classic/default.css';
import { Fragment } from 'react';

export default class Timer extends Component {
  render() {
    return (
      <Fragment>
        {/* <TimePickerWrapper
          colorPalette="dark"
          showTimezone
          timezoneIsEditable
        /> */}
        <TimePicker
          closeOnOutsideClick={false}
          disabled={true}
          language="zh-cn"
        />
      </Fragment>
    );
  }
}
