// 暂未开发 页面

import * as React from "react";
import "./index.scss";
import { withRouter, RouteComponentProps } from "react-router-dom";

export interface Props extends RouteComponentProps {}
export interface State {}

class NoOpen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="no-open">
        <div>客官内容还在开发中哦~ </div>
        <div
          onClick={() => {
            this.props.history.push("/home");
          }}
        >
          先去首页看看吧
        </div>
      </div>
    );
  }
}

export default withRouter(NoOpen);
