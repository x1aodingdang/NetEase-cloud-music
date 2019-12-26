import * as React from "react";
import "./index.scss";
import { connect } from "react-redux";
import { StoreState } from "../../store";
import { http } from "../../api/http";
import { $APISongDetail } from "../../api/apiList";
import Header from "../../components/Header";
const coverDefault = require("../../assets/images/play/disc_default.png");

export interface IProps {
  songId: number;
}

export interface IState {
  songInfo: any;
  isPlay: boolean;
}

class Play extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      songInfo: {},
      isPlay: false
    };
  }
  componentDidMount() {
    this.getDateil();
  }
  getDateil() {
    http($APISongDetail, { data: { ids: this.props.songId } }).then(
      (res: any) => {
        this.setState({
          songInfo: res.songs[0]
          // picUrl: res.
        });
      }
    );
  }
  render() {
    const {
      songInfo: { al = { picUrl: "" }, name },
      isPlay
    } = this.state;
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
          <div
            style={{ color: "#fff" }}
            onClick={() => {
              this.setState({
                isPlay: !isPlay
              });
            }}
          >
            {isPlay ? "暂停" : "播放"}
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state: StoreState) => ({
  songId: state.play.songId
}))(Play);
