//  首页 推荐歌单 HomeRecommendPlayList

import * as React from "react";
import "./index.scss";
import { connect } from "react-redux";
import { StoreState } from "../../../../store";
import { IPlayListContent } from "../../../../store/reducers/home";

export interface Iprops {
  playList: IPlayListContent[];
}

class HomeRecommendPlayList extends React.Component<Iprops> {
  render() {
    const { playList } = this.props;
    const items = playList.map(v => {
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

export default connect((s: StoreState) => ({
  playList: s.home.playList
}))(HomeRecommendPlayList);
