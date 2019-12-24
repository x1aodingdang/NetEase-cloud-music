import * as React from "react";
import BScroll from "@better-scroll/core";
import PullDown from "@better-scroll/pull-down";
import "./index.scss";
import Icon from "../Icon";

BScroll.use(PullDown);

let isPullDowning = false; // 同步的 是否在下拉加载中

export interface iProps {
  pullDownCb?: () => Promise<void>;
  bounce?:
    | boolean
    | { left?: boolean; right?: boolean; top?: boolean; bottom?: boolean };
}
export interface iState {
  bs: BScroll | null;
  isPullDown: boolean;
  beforePullDown: boolean;
  isPullingDown: boolean;
}

const TIME_BOUNCE = 800;
const TIME_STOP = 600;
const THRESHOLD = 70;
const STOP = 56;

/**
 * @description 重点~~~需要在外层盒子定义一个高度~~~
 * @param pullDownCb?  () => Promise<void>
 */
export default class Srcoll extends React.Component<iProps, iState> {
  scrollDom: any;
  constructor(Props: iProps) {
    super(Props);
    const isPullDown = Boolean(Props.pullDownCb);
    this.state = {
      bs: null,
      isPullDown: isPullDown, // 是否可以下拉
      beforePullDown: true, // 是否在下拉之前
      isPullingDown: false // 是否下拉中
    };
    this.scrollDom = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.init();
    }, 20);
  }

  init = () => {
    const { isPullDown } = this.state;

    const bounce =
      this.props.bounce === false
        ? {
            top: false,
            bottom: false,
            left: false,
            right: false
          }
        : this.props.bounce || true;
    const bs = new BScroll(this.scrollDom.current, {
      scrollY: true,
      click: true,
      probeType: 3, // listening scroll hook
      // pullDownRefresh: true,

      pullDownRefresh: isPullDown && {
        threshold: THRESHOLD, // 配置顶部下拉的距离来决定刷新时机
        stop: STOP // 回弹停留的距离
      },

      bounce: bounce // 回弹
    });

    isPullDown && bs.on("pullingDown", this.pullingDownHandler);

    this.setState({
      bs: bs
    });
  };

  pullingDownHandler = async () => {
    const { isPullDown } = this.state;
    if (!isPullDown || typeof this.props.pullDownCb !== "function") return;
    isPullDowning = true;
    this.setState({
      beforePullDown: false,
      isPullingDown: true
    });

    // 通知 外层 请求数据
    // await this.requestData();

    await this.props.pullDownCb();
    this.setState({
      isPullingDown: false
    });
    this.finishPullDown();
  };

  async finishPullDown() {
    const stopTime = TIME_STOP;
    const { bs } = this.state;
    await new Promise(resolve => {
      setTimeout(() => {
        isPullDowning = false;
        bs && bs.finishPullDown();
        // (bs as BScroll).finishPullDown();
        resolve();
      }, stopTime);
    });
    setTimeout(() => {
      this.setState({
        beforePullDown: true
      });
      this.refresh();
    }, TIME_BOUNCE);
  }

  refresh = () => {
    this.state && this.state.bs && this.state.bs.refresh();
  };

  // getSnapshotBeforeUpdate(prevProps: iProps, prevState: iState) {
  //   if (prevState.hasNewMsg) {
  //     const scroll = this.ScrollMessage;
  //     const content = this.ScrollMessageUl;
  //     return content.offsetHeight <= scroll.scrollTop + scroll.offsetHeight;
  //   }
  //   return false;
  // }

  componentDidUpdate(prevProps: iProps, prevState: iState) {
    if (!isPullDowning || !prevState.isPullDown) {
      this.refresh();
    }
  }

  renderBeforeLoading(isLoading: boolean) {
    return (
      <div
        className={`pulldown-before-loading ${isLoading && "active-laoding"}`}
      >
        <Icon className="icon-yinle1"></Icon>
      </div>
    );
  }

  render() {
    const {
      props: { children },
      state: { beforePullDown, isPullingDown }
    } = this;

    return (
      <div className="core-container">
        <div className="scroll-wrapper" ref={this.scrollDom}>
          <div className="pulldown-scroller">
            {/* 加载区域 */}
            {Boolean(this.props.pullDownCb) && (
              <div
                className="pulldown-wrapper"
                style={{
                  height: STOP,
                  top: -STOP
                }}
              >
                {/* 加载前 */}
                {beforePullDown && this.renderBeforeLoading(false)}
                {!beforePullDown && (
                  <div>
                    {/* 加载中 */}
                    {isPullingDown && this.renderBeforeLoading(true)}
                    {/* 加载成功 */}
                    {!isPullingDown && this.renderBeforeLoading(false)}
                  </div>
                )}
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    );
  }
}
