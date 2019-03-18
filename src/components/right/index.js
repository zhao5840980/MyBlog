import React, { Component } from 'react';
import './right.scss';
import TagClound from '../TagCloud';
import { Icon } from 'antd';
// import Timer from '../timer/';
import MyClock from '../myClock';

class Right extends Component {
  render() {
    return (
      <div className="right">
        <div className="right-1" />
        <div className="timer">
          <MyClock />
        </div>
        <div className="tagclound">
          <p className="tage">
            <Icon type="tags" />
            <span className="tags-name">标签云</span>
          </p>
          <div className="tag-wrap">
            <TagClound />
          </div>
        </div>
      </div>
    );
  }
}

export default Right;
