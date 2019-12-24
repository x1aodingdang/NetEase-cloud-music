import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Header from "../../../components/Header";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IHttpOpt } from "../../../api/http";
import { getRankDetail } from "../../../store/actions/ranking";
import {
  IRankingDetailPlaylistInfo,
  IRankingDetailPlaylist,
  IRankingDetailPrivileges
} from "./interface";
import "./index.scss";
import Srcoll from "../../../components/Scroll";
import { rankingLenFormat } from "../../../utils";

export interface IParams {
  id: string;
}
export interface IProps extends RouteComponentProps<IParams> {
  getRankDetail: (opt: IHttpOpt) => void;
}

export interface IState {
  playlist: IRankingDetailPlaylist[];
  playlistInfo: IRankingDetailPlaylistInfo | any;
  privileges: IRankingDetailPrivileges[];
}

class RankingDetail extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      playlist: [],
      playlistInfo: {},
      privileges: []
    };
  }
  componentDidMount() {
    this.getList();
  }
  async getList() {
    const { id } = this.props.match.params;
    const res: any = await this.props.getRankDetail({ data: { idx: id } });
    this.setState({
      playlist: res.playlist.tracks,
      playlistInfo: res.playlist,
      privileges: res.privileges
    });
  }

  render() {
    const {
      state: {
        playlistInfo: { coverImgUrl, name, creator, tracks, trackIds },
        playlist
      }
    } = this;

    const listItems = playlist.map(({ name, id, ar, al }, i) => {
      const trackIdsItem = trackIds[i] || {};
      return (
        <li key={id} className="ranking-detail-item">
          <div className="ranking-info">
            <div className={`ranking-num ${i < 3 && "top3"}`}>
              {rankingLenFormat(i + 1)}
            </div>
            <div className="ratio">{trackIdsItem.ratio}</div>
          </div>
          <div className="music-info">
            <div className="name">{name}</div>
            <div>
              <div className="tag"></div>
              <div className="detailedness-name">
                {ar[0].name}- {al.name}
              </div>
            </div>
          </div>
        </li>
      );
    });

    return (
      <div className="ranking-detail">
        <Header type="back" title="排行榜" style={{ color: "#fff" }}></Header>
        <div className="ranking-detail-container">
          <Srcoll bounce={false}>
            <div
              className="ranking-detail-container-bg"
              style={{
                backgroundImage: `url(${coverImgUrl})`
              }}
            ></div>
            <div className="ranking-detail-container-list">
              <Srcoll bounce={true}>
                <ul>{listItems}</ul>
              </Srcoll>
            </div>
          </Srcoll>
        </div>
        {/* <img src={coverImgUrl} alt={name} /> */}
        tsx
      </div>
    );
  }
}

export default connect(
  () => ({}),
  (dispatch: Dispatch) => ({
    getRankDetail: (opt: IHttpOpt) => dispatch(getRankDetail(opt))
  })
)(RankingDetail);
