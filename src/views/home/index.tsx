// src/components/Hello.tsx

import * as React from "react";
import "./index.scss";
import Header from "../../components/Header/";
import Slide from "./components/slide/";
import HomeCategory from "./components/category/";
import HomeRecommendPlayList from "./components/playList/";
import Srcoll from "../../components/Scroll";

export interface Props {}

// 这里为什么不能滚动 因为  可能有如下原因
// 1. scroll 里边的盒子 没有高度
// 2.  需要重新  bs.refresh
export default class Home extends React.Component<Props> {
  refSrcollDom: any;
  constructor(props: Props) {
    super(props);
    this.refSrcollDom = React.createRef();
  }

  componentDidUpdate() {
    console.log("home --- componentDidUpdate");
    // 重新 re
    // console.log(this.refSrcollDom.current.refresh());
  }

  render() {
    return (
      <div className="home">
        {/* 头部搜索框 */}
        <Header />
        <Srcoll ref={this.refSrcollDom}>
          {/* 轮播图 */}
          <Slide />
          {/* 分类 */}
          <HomeCategory />
          {/* 推荐歌单 */}
          <HomeRecommendPlayList />
          <HomeRecommendPlayList />
        </Srcoll>
      </div>
    );
  }
}
