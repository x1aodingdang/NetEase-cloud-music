// src/components/Hello.tsx

import * as React from "react";
import "./index.scss";
import Header from "../../components/Header/";
import Slide from "./components/slide/";
import HomeCategory from "./components/category/";
import HomeRecommendPlayList from "./components/playList/";
import Srcoll from "../../components/Scroll";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { decrement, increment } from "../../store/actions";
import { StoreState } from "../../store/index";
import { StateContent } from "../../store/reducers/home";

export interface IProps {
  bannerList: StateContent[];
}

// 这里为什么不能滚动 因为  可能有如下原因
// 1. scroll 里边的盒子 没有高度
// 2.  需要重新  bs.refresh
// @connect()
class Home extends React.Component<IProps> {
  refSrcollDom: any;
  constructor(props: IProps) {
    super(props);
    this.refSrcollDom = React.createRef();
  }

  componentDidUpdate() {
    console.log("home --- componentDidUpdate");
    // 重新 re
    // console.log(this.refSrcollDom.current.refresh());
  }

  pullDownCb = () => {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 2400);
    });
  };

  render() {
    console.log(this.props.bannerList);
    return (
      <div className="home">
        {/* 头部搜索框 */}
        <Header />
        <Srcoll ref={this.refSrcollDom} pullDownCb={this.pullDownCb}>
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

export default connect((s: StoreState) => {
  return {
    bannerList: s.home.bannerList
  };
})(Home);
