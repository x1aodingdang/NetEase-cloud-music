// src/components/Hello.tsx

import * as React from "react";
import "./index.scss";
import Header from "../../components/Header/";
import Slide from "./components/slide/";
import HomeCategory from "./components/category/";
import HomeRecommendPlayList from "./components/playList/";

export interface Props {}

export default class Home extends React.Component<Props> {
  render() {
    return (
      <div className="home">
        {/* 头部搜索框 */}
        <Header />
        {/* 轮播图 */}
        <Slide />
        {/* 分类 */}
        <HomeCategory />
        {/* 推荐歌单 */}
        <HomeRecommendPlayList />
      </div>
    );
  }
}
