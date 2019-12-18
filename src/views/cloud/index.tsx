import * as React from "react";
import { connect } from "react-redux";
import NoOpen from "../../components/NoOpen";

// 创建类型接口
export interface IProps {}

class Cloud extends React.Component<IProps> {
  render() {
    return <NoOpen></NoOpen>;
  }
}

export default connect()(Cloud);
