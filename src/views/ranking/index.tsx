import * as React from "react";
import "./index.scss";
import Header from "../../components/Header";
import Official from "./official";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { getRankOfficialList } from "../../store/actions/ranking";
import { IHttpOpt } from "../../api/http";

export interface IProps {
  getRankOfficialList: (opt: IHttpOpt) => void;
}
export interface State {}

/**
 * 排行榜
 */
class Ranking extends React.Component<IProps, State> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getRankOfficialList({
      data: {
        idx: 1
      }
    });
  }
  render() {
    return (
      <div className="ranking">
        <Header type={"back"} title="排行榜"></Header>
        <Official></Official>
      </div>
    );
  }
}

export default connect(
  () => ({}),
  (dispatch: Dispatch) => ({
    getRankOfficialList: (opt: IHttpOpt) => dispatch(getRankOfficialList())
  })
)(Ranking);
