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
  setCurrentDuration,
  setSongId
} from "../../store/actions/play";
import { RouteComponentProps } from "react-router-dom";
import PlayProgress from "./progress";
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
// 应该有一个 songIdList
// ？ 这个 songIdList 该怎么拿？  songIdList 应该在 本地在存储一份
// 1. 点击 排行榜 的时候设置 这个 list

export interface IProps
  extends RouteComponentProps<{
    id: string;
  }> {
  songId: number;
  isPlay: boolean;

  setSongId: (arg0: number) => void;
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
    const { songId, setSongId, setCurrentDuration, setPlayStatus } = this.props;
    const { id } = this.props.match.params;
    // res 判断当前播放的音乐是否和params.id 相等
    // 如果相等 获取 页面信息（getDateil） 设置 player （Player.getLastInstance()）
    // else 切换到 id 歌曲  销毁上一首 再加载当前
    const res = Number(id) === songId;
    // console.log("componentDidMount 执行了", res);

    if (!id) {
      return Toast.info("播放错误", undefined, () => {
        this.props.history.goBack();
      });
    } //

    this.getDateil(); // 这里可以 优化一下  放在 redux 以至于打开同一个歌曲的时候 在请求一次
    !res && setSongId(Number(id));
    const lastPlayerInstance = Player.getLastInstance();
    if (res) {
      this.setState({
        player: lastPlayerInstance
      });
      !lastPlayerInstance && this.checkMusicUrl(); // 没有 实例 证明是 头一次打开（页面刷新了）
      return;
    }
    setCurrentDuration(0);
    setPlayStatus(false);

    // 将上一首歌 销毁
    lastPlayerInstance && lastPlayerInstance.player.unload();
    this.checkMusicUrl();
  }
  static getDerivedStateFromProps(props: IProps, state: IState) {
    // console.log(props, state);
    return null;
  }

  getDateil() {
    http($APISongDetail, { data: { ids: this.props.match.params.id } }).then(
      (res: any) => {
        this.setState({
          songDetail: res.songs[0]
          // picUrl: res.
        });
      }
    );
  }
  // 检测是否可以播放 如果可以 就直接播放了
  checkMusicUrl() {
    const id = this.props.match.params.id;
    http($APICheckMusic, { data: { id } }).then((res: any) => {
      if (res.success) {
        return this.getMusicUrl();
      }
      Toast.info(res.message);
    });
  }
  getMusicUrl() {
    const id = this.props.match.params.id;
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
      },
      // 播放结束了  这里应该有切换下一首的东西
      onend: () => {
        console.log("播放完毕");
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
    setSongId: (id: number) => dispatch(setSongId(id)),
    setPlayStatus: (flag: boolean) => dispatch(setPlayStatus(flag)),
    setDuration: (duration: number) => dispatch(setDuration(duration)),
    setCurrentDuration: (curduration: number) =>
      dispatch(setCurrentDuration(curduration))
  })
)(Play);
