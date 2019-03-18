import React, { Component } from 'react';
// import { Row, Col } from 'antd';
import Header from '../components/header';
import Music from '../components/music';
import Body from '../components/body';
import '../App.css';
import APlayer from '../components/aplayer';
// import Footer from '../components/footer/';

export default class home extends Component {
  render() {
    return (
      <div className="web">
        <div className="bg">
          <Header />
          {/* 音乐组件 */}
          {/* <Music /> */}
          <APlayer />
          <Body {...this.props} />
        </div>
      </div>
    );
  }
}
