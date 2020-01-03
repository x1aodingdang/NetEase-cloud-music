import * as React from "react";
import "./index.scss";
import { connect } from "react-redux";
import { StoreState } from "../../store";
import Header from "../../components/Header";
import Icon from "../../components/Icon";
import { Toast } from "antd-mobile";
import Player from "../../servers/player";
import { Dispatch } from "redux";
import {
  setPlayStatus,
  setSongId,
  initPlayer,
  next,
  prev
} from "../../store/actions/play";
import { RouteComponentProps } from "react-router-dom";
import PlayProgress from "./progress";
import { IMusicDetail, IMusicUrl } from "../../store/reducers/play/interface";
const coverDefault = require("../../assets/images/play/disc_default.png");

// 思考
// 触发 play.songId  重新请求 songInfo
// 1.  从外面点进来 播放页面  什么时候  应该切换 什么时候不切换   ✅
// 在play 页面 加个  参数吧  为 songId  相同不切换 不同就切换   ✅
// getDateil 放到 redux
// songDetail  songUrlInfo  这里应该也存在 redux 里边

// mount
// 从 redux 取出 songId  ✅

// 切换歌曲
// 应该有一个 songIdList✅
// ？ 这个 songIdList 该怎么拿？  songIdList 应该在 本地在存储一份✅
// 1. 点击 排行榜 的时候设置 这个 list

//  未完成
// 1. songIdList 目前是写死的
// 2. 后台播放有重大问题   应当把播放逻辑 迁移到 redux 这个页面只做展示  逻辑开始迁移...
//     迁移到 redux    ✅
//     getDetail      ✅
//     checkMusicUrl  ✅
//     getMusicUrl    ✅
//     play           ✅
//     next pre       ✅
//     init           ✅

export interface IProps
  extends RouteComponentProps<{
    id: string;
  }> {
  playerInstance: Player;
  songId: number;
  isPlay: boolean;
  playList: number[];
  musicDetail: IMusicDetail;
  musicUrl: IMusicUrl;
  setSongId: (id: number) => void;
  setPlayStatus: (flag: boolean) => void;
  initPlayer: (id: number) => void;
  next: (lastId?: number, cb?: (id: number) => void) => void;
  prev: (lastId?: number, cb?: (id: number) => void) => void;
}

export interface IState {}

class Play extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.init();
  }

  init = (id: number = Number(this.props.match.params.id)) => {
    if (!id) {
      return Toast.info("播放错误", undefined, () => {
        this.props.history.goBack();
      });
    }

    const { songId, setSongId, initPlayer } = this.props;
    // const { id } = this.props.match.params;
    setSongId(id);

    // res 判断当前播放的音乐是否和params.id 相等
    // 如果相等 获取 页面信息（getDateil） 设置 player （Player.getLastInstance()）
    // else 切换到 id 歌曲  销毁上一首 再加载当前
    const res = id === songId;

    const lastPlayerInstance = Player.getLastInstance();
    if (res) {
      this.setState({
        player: lastPlayerInstance
      });
      !lastPlayerInstance && initPlayer(id); // 没有 实例 证明是 头一次打开（页面刷新了）
      return;
    }
    // 将上一首歌 销毁
    // lastPlayerInstance && lastPlayerInstance.player.unload();
    initPlayer(id);
  };

  next = (id: number) => {
    const { history, next } = this.props;
    next(id, (id: number) => {
      history.replace(`/play/${id}`);
    });
  };
  pre = (id: number) => {
    const { history, prev } = this.props;
    prev(id, (id: number) => {
      history.replace(`/play/${id}`);
    });
  };
  changePlayStatu = (isPlay: boolean) => {
    const { playerInstance, setPlayStatus } = this.props;
    //  需要暂停
    if (isPlay) {
      playerInstance.player && playerInstance.player.pause();
    } else {
      playerInstance.player && playerInstance.player.play();
    }
    setPlayStatus(!isPlay);
  };
  render() {
    const {
      isPlay,
      musicDetail: { al = { picUrl: "" }, name },
      songId
    } = this.props;
    const cover = al.picUrl || coverDefault;
    return (
      <div className="play-music">
        <div
          className="play-music-bg"
          style={{
            backgroundImage: `url('${al.picUrl}')`
          }}
        ></div>
        <Header type="back" title={name} style={{ color: "#FFF" }}></Header>
        <div className="play-music-container">
          <div className="disc">
            <div className={`disc-needle ${isPlay && "active"}`}></div>
            <div className={`disc-bg ${isPlay && "active"}`}>
              <div
                className="song-cover"
                style={{
                  backgroundImage: `url('${cover}')`
                }}
              ></div>
              {/* <div className="song-cover"></div> */}
            </div>
          </div>
          {/* 时间进度 */}
          <PlayProgress />

          {/* 操作 */}
          <div className="actions">
            <div
              className="prev-btn"
              onClick={() => {
                this.pre(songId);
              }}
            >
              <Icon className="icon-xiayigexiayishou"></Icon>
            </div>

            <div
              className="play-btn"
              onClick={() => {
                this.changePlayStatu(isPlay);
                // this.props.setPlayStatus(!isPlay);
              }}
            >
              <Icon className={isPlay ? "icon-zanting2" : "icon-bofang"}></Icon>
            </div>
            <div
              className="next-btn"
              onClick={() => {
                this.next(songId);
              }}
            >
              <Icon className="icon-animation-next"></Icon>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state: StoreState) => ({
    playerInstance: state.play.playerInstance,
    songId: state.play.songId,
    isPlay: state.play.isPlay,
    playList: state.play.playList,
    musicDetail: state.play.musicDetail,
    musicUrl: state.play.musicUrl
  }),
  (dispatch: Dispatch) => ({
    setSongId: (id: number) => dispatch(setSongId(id)),
    setPlayStatus: (flag: boolean) => dispatch(setPlayStatus(flag)),
    initPlayer: (id: number) => dispatch(initPlayer(id)),
    next: (id?: number, cb?: (id: number) => void) => dispatch(next(id, cb)),
    prev: (id?: number, cb?: (id: number) => void) => dispatch(prev(id, cb))
  })
)(Play);
