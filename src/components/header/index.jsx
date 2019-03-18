import React, { Component } from 'react';
import { Row, Col, Menu, Icon, Input } from 'antd';
import { Link } from 'react-router-dom';
import './header.scss';

const Search = Input.Search;
export default class componentName extends Component {
  state = {
    current: '首页'
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <div className="header">
        <div className="header-wrap">
          <div className="header-wrap-l">
            <div className="logo">我的小窝</div>
            <Menu
              className="header-wrap-l-line"
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="首页">
                <Link to="/home">
                  <Icon type="home" theme="filled" />
                  首页
                </Link>
              </Menu.Item>
              <Menu.Item key="归档">
                <Link to="/home/guidang">
                  <Icon type="switcher" theme="filled" />
                  归档
                </Link>
              </Menu.Item>
              <Menu.Item key="友情链接">
                <Link to="/home/friendly">
                  <Icon type="box-plot" theme="filled" />
                  友情链接
                </Link>
              </Menu.Item>
              <Menu.Item key="关于我">
                <Icon type="smile" theme="filled" />
                关于我
              </Menu.Item>
            </Menu>
          </div>
          <div className="search-wrap">
            <Search
              className=""
              placeholder="想要的都在这里(＾Ｕ＾)ノ~ＹＯ"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />
          </div>
        </div>
      </div>
    );
  }
}
