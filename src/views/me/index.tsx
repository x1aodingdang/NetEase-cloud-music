import * as React from "react";
import { connect } from "react-redux";

// 创建类型接口
export interface IProps {}

class Me extends React.Component<IProps> {
  render() {
    return (
      <div
        style={{
          height: "100%",
          backgroundColor: "yellow"
        }}
      ></div>
    );
  }
}

export default connect()(Me);
