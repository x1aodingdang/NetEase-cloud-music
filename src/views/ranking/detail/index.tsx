import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Header from "../../../components/Header";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IHttpOpt } from "../../../api/http";
import { getRankDetail } from "../../../store/actions/ranking";
import { IRankingDetailPlaylist, IRankingDetailPrivileges } from "./interface";

export interface IParams {
  id: string;
}
export interface IProps extends RouteComponentProps<IParams> {
  getRankDetail: (opt: IHttpOpt) => void;
}

export interface IState {
  playlist: IRankingDetailPlaylist | any;
  privileges: IRankingDetailPrivileges[];
}

class RankingDetail extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      playlist: {},
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
      playlist: res.playlist,
      privileges: res.privileges
    });
  }

  render() {
    const {
      state: {
        playlist: { coverImgUrl }
      }
    } = this;
    return (
      <div>
        <Header type="back" title="排行榜"></Header>
        {/* <img src={coverImgUrl} alt="" /> */}
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
