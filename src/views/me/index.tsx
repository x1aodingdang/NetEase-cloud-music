import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { decrement, increment } from "../../store/actions";
import { StoreState } from "../../store/index";

// 创建类型接口
export interface IProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const mapStateToProps = (state: StoreState): { value: number } => {
  return {
    // value: state
    value: state.test.value
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onDecrement: () => dispatch(decrement()),
  onIncrement: () => dispatch(increment())
});

class Me extends React.Component<IProps> {
  render() {
    return (
      <div
        style={{
          height: "100%",
          backgroundColor: "yellow"
        }}
      >
        <div onClick={this.props.onIncrement}>+ 点我咯</div>
        <p>我是value{this.props.value}</p>
        <div onClick={this.props.onDecrement}>- 点我咯</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Me);
