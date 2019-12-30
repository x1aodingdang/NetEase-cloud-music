import * as React from "react";
import "./index.scss";
import { connect } from "react-redux";
import { StoreState } from "../../store";
import { http } from "../../api/http";
import {
  $APISongDetail,
  $APIGetMusicUrl,
  $APICheckMusic,
  IAPIGetMusicUrl
} from "../../api/apiList";
import Header from "../../components/Header";
import Icon from "../../components/Icon";
import { Toast } from "antd-mobile";
import Player from "../../servers/player";
import { Dispatch } from "redux";
import {
  setPlayStatus,
  setDuration,
  setCurrentDuration
} from "../../store/actions/play";
import { RouteComponentProps } from "react-router-dom";
import PlayProgress from "./progress";
const coverDefault = require("../../assets/images/play/disc_default.png");

// 思考
// 触发 play.songId  重新请求 songInfo
// songDetail  songUrlInfo  这里应该也存在 redux 里边
// mount
// 从 redux 取出 songId
// 触发 actions 获取最新的  songDetail songUrlInfo
// 页面那到这些数据  ->  play

// 切换歌曲
// 应该有一个 songIdList
// ？ 这个 songIdList 该怎么拿？  songIdList 应该在 本地在存储一份
// 1. 点击 排行榜 的时候设置 这个 list

export interface IProps extends RouteComponentProps {
  songId: number;
  isPlay: boolean;

  setPlayStatus: (arg0: boolean) => void;
  setDuration: (arg0: number) => void;
  setCurrentDuration: (arg0: number) => void;
}

export interface IState {
  songDetail: any;
  songUrlInfo: IAPIGetMusicUrl;
  player: Player;
}

class Play extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      songDetail: {},
      songUrlInfo: {} as IAPIGetMusicUrl,
      player: {} as Player
    };
  }
  componentDidMount() {
    console.log("componentDidMount 执行了");
    const { isPlay, songId } = this.props;
    if (!songId) {
      return Toast.info("播放错误", undefined, () => {
        this.props.history.goBack();
      });
    } //
    this.getDateil();
    this.setState({
      player: Player.getLastInstance()
    });
    if (isPlay) return;
    this.checkMusicUrl();
  }
  static getDerivedStateFromProps(props: IProps, state: IState) {
    console.log(props, state);
    return null;
  }

  getDateil() {
    http($APISongDetail, { data: { ids: this.props.songId } }).then(
      (res: any) => {
        this.setState({
          songDetail: res.songs[0]
          // picUrl: res.
        });
      }
    );
  }
  checkMusicUrl() {
    const id = this.props.songId;
    http($APICheckMusic, { data: { id } }).then((res: any) => {
      if (res.success) {
        return this.getMusicUrl();
      }
      Toast.info(res.message);
    });
  }
  getMusicUrl() {
    const id = this.props.songId;
    http($APIGetMusicUrl, {
      data: { id }
    }).then((res: any) => {
      const data: IAPIGetMusicUrl[] = res.data;
      const songUrlInfo = data[0];
      this.setState({
        songUrlInfo
      });
      // 拿到 当前请求的  可以播放了
      if (songUrlInfo && songUrlInfo.url) {
        this.play();
      }
    });
  }
  play() {
    const { songUrlInfo } = this.state;
    const { setPlayStatus, setDuration, setCurrentDuration } = this.props;
    setPlayStatus(true);
    const player: Player = new Player({
      src: songUrlInfo.url,
      onload: ({ duration }) => {
        setDuration(duration);
      },
      // 播放状态中 一秒钟执行一次  用来改变进度
      onProgress: curDuration => {
        setCurrentDuration(curDuration);
      }
    });
    Player.setplayerlist(player);
    this.setState({
      player
    });
  }
  changePlayStatu = (isPlay: boolean) => {
    //  需要暂停
    if (isPlay) {
      this.state.player.pause();
    } else {
      this.state.player.play();
    }
    this.props.setPlayStatus(!isPlay);
  };
  render() {
    const {
      songDetail: { al = { picUrl: "" }, name }
    } = this.state;
    const { isPlay } = this.props;
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
            <div className="prev-btn">
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
            <div className="next-btn">
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
    songId: state.play.songId,
    isPlay: state.play.isPlay
  }),
  (dispatch: Dispatch) => ({
    setPlayStatus: (flag: boolean) => dispatch(setPlayStatus(flag)),
    setDuration: (duration: number) => dispatch(setDuration(duration)),
    setCurrentDuration: (curduration: number) =>
      dispatch(setCurrentDuration(curduration))
  })
)(Play);
