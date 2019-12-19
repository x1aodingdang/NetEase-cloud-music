import * as React from "react";
import "./index.scss";
import officialList from "./list";
import { connect } from "react-redux";
import { StoreState } from "../../../store";
import { IRankOfficialList } from "../../../store/reducers/ranking";

export interface Props {
  rankOfficialList: IRankOfficialList;
}
export interface State {}

/**
 * 官方榜
 */
class Official extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(this.props.rankOfficialList);
    const items = this.props.rankOfficialList.map(
      ({ id, updateFrequency, coverImgUrl, name, tracks }) => {
        console.log(id, name);
        return (
          <li className="offcial-item" key={id}>
            <div className="item-icon">
              <img src={coverImgUrl} alt={name} />
              <span className="item-icon-sub-tit">{updateFrequency}</span>
            </div>
            <div className="item-top-list">
              {tracks.map(({ first, second }, i) => {
                return (
                  <div className="top-list-item ellipsis" key={i}>
                    {i + 1}.{first}&nbsp;-&nbsp;{second}
                  </div>
                );
              })}
            </div>
          </li>
        );
      }
    );

    /* const items = officialList.map(({ id, subTit, icon, title }) => {
      return (
        <li className="offcial-item" key={id}>
          <div className="item-icon">
            <img src={icon} alt={title} />
            <span className="item-icon-sub-tit">{subTit}</span>
          </div>
          <div className="item-top-list">
            <div className="top-list-item">1.xx`</div>
            <div className="top-list-item">2.xx </div>
            <div className="top-list-item">3.xx</div>
          </div>
        </li>
      );
    }); */

    return (
      <div className="ranking-offcial">
        <h3 className="offcial-tit">官方榜</h3>
        <ul className="offcial-content">{items}</ul>
      </div>
    );
  }
}

export default connect((state: StoreState) => ({
  rankOfficialList: state.rankList.rankOfficialList
}))(Official);
