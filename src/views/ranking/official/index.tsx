import * as React from "react";
import "./index.scss";
import officialList from "./list";

export interface Props {}
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
    const items = officialList.map(({ id, subTit, icon, title }) => {
      return (
        <li className="offcial-item" key={id}>
          <div className="item-icon">
            <img src={icon} alt={title} />
            <span className="item-icon-sub-tit">{subTit}</span>
          </div>
          <div className="item-top-lsit">
            <div className="top-lsit-item">1.xx`</div>
            <div className="top-lsit-item">2.xx </div>
            <div className="top-lsit-item">3.xx</div>
          </div>
        </li>
      );
    });
    return (
      <div className="ranking-offcial">
        <h3 className="offcial-tit">官方榜</h3>
        <ul className="offcial-content">{items}</ul>
      </div>
    );
  }
}

export default Official;
