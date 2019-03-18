import React, { Component } from 'react';
import { Card, Avatar } from 'antd';
import './left.scss';
import img3 from '../../img/3.jpg';

const { Meta } = Card;

class index extends Component {
  render() {
    return (
      <div className="body-left">
        {/* <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src={img3}
            />
          }
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="@zhengzheng"
            description="自己的窝"
          />
          <div className="msg">
            <ul className="msg-list">
              <li>
                <p className="num">30</p>
                <p>文章</p>
              </li>
              <li>
                <p className="num">30</p>
                <p>说说</p>
              </li>
            </ul>
          </div>
        </Card> */}
        <div className="left-title">
          <div className="user-top">
            <img src={img3} alt="" className="user-bg" />
          </div>
          <div className="user-img">
            <div className="user-photo">
              <img src={img3} alt="" className="user-photo-wrap" />
              <span className="username">@zhengzheng</span>
            </div>
          </div>
          <div className="msg">
            <ul className="msg-list">
              <li>
                <p className="num">30</p>
                <p>文章</p>
              </li>
              <li>
                <p className="num">30</p>
                <p>说说</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
