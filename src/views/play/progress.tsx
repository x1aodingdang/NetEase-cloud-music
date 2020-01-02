import * as React from "react";
import { secondToMinuteSecond } from "../../utils";
import { connect } from "react-redux";
import { StoreState } from "../../store";

export interface IProps {
  duration: number;
  curDuration: number;
}

export interface IState {}

class PlayProgress extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    const { duration, curDuration } = this.props;

    return (
      <div className="progress">
        <div>{secondToMinuteSecond(curDuration)}</div>
        <div className="progress-bar">
          <div
            className="active"
            style={{
              // transform: `translateY(-0.1rem) translateX(${(curDuration /
              //   duration) *
              //   100}%)`,
              left: `${!curDuration ? 0 : (curDuration / duration) * 100}%`
            }}
          ></div>
        </div>
        <div>{secondToMinuteSecond(duration)}</div>
      </div>
    );
  }
}

export default connect((state: StoreState) => ({
  duration: state.play.duration,
  curDuration: state.play.curDuration
}))(PlayProgress);
