import React, { Component } from 'react';
import { Carousel, Menu } from 'antd';
import { Route } from 'react-router-dom';
import './middle.scss';
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import { Link, Switch, Redirect } from 'react-router-dom';
import All from '../all';
import Article from '../article';
// const tabList = [
//   {
//     key: 'tab1',
//     tab: 'tab1'
//   },
//   {
//     key: 'tab2',
//     tab: 'tab2'
//   }
// ];

// const contentList = {
//   tab1: <p>content1</p>,
//   tab2: <p>content2</p>
// };

// const tabListNoTitle = [
//   {
//     key: '全部',
//     tab: '全部'
//   },
//   {
//     key: '文章',
//     tab: '文章'
//   },
//   {
//     key: '说说',
//     tab: '说说'
//   }
// ];
// const TabPane = Tabs.TabPane;

// const contentListNoTitle = {
//   article: <p>article content</p>,
//   app: <p>app content</p>,
//   project: <p>project content</p>
// };
function onChange(a, b, c) {
  console.log(a, b, c);
}
// function callback(key) {
//   console.log(key);
// }
export default class middle extends Component {
  state = {
    key: 'tab1',
    noTitleKey: 'app'
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <div className="middle-wrap">
        <Carousel
          afterChange={onChange}
          effect="fade"
          autoplay
          className="banner-list"
        >
          <div>
            <img className="banner-img" src={img1} alt="" />
          </div>
          <div>
            <img className="banner-img" src={img2} alt="" />
          </div>
        </Carousel>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="全部">
            <Link to="/home/middle/all">全部</Link>
          </Menu.Item>
          <Menu.Item key="文章">
            <Link to="/home/middle/article">文章</Link>
          </Menu.Item>
          <Menu.Item key="说说">
            <Link to="/home/middle/friendly">说说</Link>
          </Menu.Item>
        </Menu>
        <Switch>
          {/* <Route
            exact
            path="/home/middle"
            render={() => <Redirect to="/home/middle/all" />}
          /> */}
          <Route path="/home/middle/all" component={All} />
          <Route path="/home/middle/article" component={Article} />
          <Route component={All} />
        </Switch>
        <div className="wrap-kong" />
      </div>
    );
  }
}
