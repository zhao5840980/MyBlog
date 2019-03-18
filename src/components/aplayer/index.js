import React, { Component } from 'react';
import ReactAplayer from 'react-aplayer';

class index extends Component {
  // event binding example
  onPlay = () => {
    console.log('on play');
  };

  onPause = () => {
    console.log('on pause');
  };

  // example of access aplayer instance
  onInit = ap => {
    this.ap = ap;
  };
  render() {
    const props = {
      theme: '#e9e9e9',
      mini: true,
      autoplay: true,
      fixed: true,

      loop: 'all',
      order: 'random',
      preload: 'auto',
      volume: 0.7,
      mutex: true,
      listFolded: false,

      lrcType: 3,
      audio: [
        {
          name: '红昭愿',
          artist: '齐奕同&董子龙&圈9',
          url:
            // 'http://www.170mv.com/kw/sk.sycdn.kuwo.cn/resource/n1/52/25/1021180831.mp3',
            'https://api.bzqll.com/music/tencent/url?id=0032gFkk009MNv&key=579621905',
          cover:
            'https://api.bzqll.com/music/kugou/pic?id=fed1ae2f02456de8fc5ea4eb4e7b16a3&imgSize=400&key=579621905',
          lrc:
            'https://api.bzqll.com/music/kugou/lrc?id=fed1ae2f02456de8fc5ea4eb4e7b16a3&key=579621905',
          theme: '#ebd0c2'
        },
        {
          name: '千年の祈り',
          artist: '姫神',
          url:
            // 'http://www.170mv.com/kw/sk.sycdn.kuwo.cn/resource/n1/52/25/1021180831.mp3',
            'https://api.bzqll.com/music/tencent/url?id=004NRYPk16ineQ&key=579621905',
          cover:
            'https://api.bzqll.com/music/tencent/pic?id=004NRYPk16ineQ&key=579621905',
          lrc:
            'https://api.bzqll.com/music/tencent/lrc?id=004NRYPk16ineQ&key=579621905',
          theme: '#ebd0c2'
        },
        {
          name: '桥豆麻袋陈粒',
          artist: '陈粒',
          url: 'http://www.ytmp3.cn/down/59102.mp3',
          cover:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534967232059&di=b2a896263b9806bafba0178688b5b05b&imgtype=0&src=http%3A%2F%2Fcdn.music.migu.cn%2Fpicture%2F2018%2F0622%2F1256%2FAL1611182053114003.jpg',

          theme: '#ebd0c2'
        },
        {
          name: '左手',
          artist: '冯提莫/小峰峰',
          url:
            'https://api.bzqll.com/music/tencent/url?id=001A6XR31TJY8a&key=579621905',
          cover:
            'https://api.bzqll.com/music/tencent/pic?id=001A6XR31TJY8a&key=579621905',
          lrc:
            'https://api.bzqll.com/music/tencent/lrc?id=001A6XR31TJY8a&key=579621905',

          theme: '#ebd0c2'
        }
      ]
    };

    return (
      <div>
        <ReactAplayer
          {...props}
          onInit={this.onInit}
          onPlay={this.onPlay}
          onPause={this.onPause}
        />
        {/* example of access aplayer instance API */}
        <button onClick={() => this.ap.toggle()}>toggle</button>
      </div>
    );
  }
}

export default index;
