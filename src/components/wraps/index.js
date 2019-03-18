import React, { Component } from 'react';
import './wrap.scss';
import { Icon } from 'antd';

import img4 from '../../img/4.jpg';
// import {  Redirect, Switch } from 'react-router-dom';

class Wrap extends Component {
  render() {
    return (
      <div className="wrap">
        <div className="wrap-title">
          <div className="user">
            <img src={img4} alt="" className="user-photowrap" />
            <div className="user-msg">
              <p className="userName">zhengzheng</p>
              <p className="data">1天前</p>
            </div>
          </div>
        </div>
        <div className="wrap-wrap">
          <div className="img-wrap">
            <img className="img-img" src={img4} alt="" />
            <div className="mask" />
          </div>
          <div className="text-wrap">
            <h3 className="title">第一篇博客yiyiyiyierererererrerer</h3>
            <p className="blog-wrap">
              第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客
            </p>
          </div>
        </div>
        <div className="wrap-bottom">
          <ul className="icon-list">
            <li>
              <Icon
                type="eye"
                theme="filled"
                // spin="true"
                // rotate="90"
                style={{ fontSize: '16px' }}
              />
              <span>12</span>
            </li>
            <li>
              <Icon
                type="message"
                theme="filled"
                style={{ fontSize: '16px' }}
              />
              <span>12</span>
            </li>
            <li>
              <Icon type="like" theme="filled" style={{ fontSize: '16px' }} />
              <span>12</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Wrap;
