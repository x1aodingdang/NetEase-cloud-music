//  首页 推荐歌单 HomeRecommendPlayList

import * as React from "react";
import { $APIHomeRecommendPlayList } from "../../../../api/apiList";
import { http } from "../../../../api/http";
import "./index.scss";

export default class HomeRecommendPlayList extends React.Component {
  state = {
    playlist: []
  };
  componentDidMount() {
    this.getPlayList();
  }
  getPlayList() {
    http($APIHomeRecommendPlayList, { data: { limit: 6 } }).then((res: any) => {
      this.setState({
        playlist: res.result
      });
    });
  }
  render() {
    const { playlist } = this.state;
    const items = playlist.map(v => {
      const { picUrl, name, id } = v;
      return (
        <li key={id} className="playlist-item">
          <div className="item-cover">
            <img src={picUrl} alt={name} />
          </div>
          <div className="item-name">{name}</div>
        </li>
      );
    });
    return (
      <div className="home-recommend-playlist">
        <div className="playlist-head">
          <h3 className="title">推荐歌单</h3>
          <div className="nav-btn">歌单广场</div>
        </div>
        <ul className="playlist">{items}</ul>
      </div>
    );
  }
}
