import * as React from "react";
import "./index.scss";
import Header from "../../components/Header";
import Official from "./official";
export interface Props {}
export interface State {}

/**
 * 排行榜
 */
class Ranking extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
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

export default Ranking;
