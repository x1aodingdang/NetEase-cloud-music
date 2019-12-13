import * as React from "react";
import BScroll from "@better-scroll/core";
import "./index.scss";

export interface iProps {}
export interface iState {
  bs: BScroll;
}

let flag = true;
/**
 * @description 重点~~~需要在外层盒子定义一个高度~~~
 *
 */
export default class Srcoll extends React.Component<iProps, iState> {
  scrollDom: any;
  constructor(Props: iProps) {
    super(Props);
    this.scrollDom = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.init();
    }, 20);
    console.log("scroll componentDidMount");
  }

  componentDidUpdate() {
    // 用来判断 dom 更新了  这个时间重新对 scroll
    // this.init();
    this.refresh();
  }

  init = () => {
    console.log("scroll 组件  init");
    console.log(document.querySelectorAll(".home-category")[0]);
    this.setState({
      bs: new BScroll(this.scrollDom.current, {
        scrollY: true,
        click: true,

        probeType: 3 // listening scroll hook
      })
    });
  };

  refresh = () => {
    this.state && this.state.bs && this.state.bs.refresh();
    console.log("srcoll refresh");
  };
  render() {
    const {
      props: { children }
    } = this;
    console.log("srcoll  render 了？", children);
    return (
      <div
        className="core-container"
        onLoad={e => {
          // console.log("我好了 你呢？？");
          // flag && this.refresh();
          flag = false;
        }}
      >
        <div className="scroll-wrapper" ref={this.scrollDom}>
          <div> {children}</div>
        </div>
      </div>
    );
  }
}
