import * as React from "react";
import "./index.scss";
import Icon from "../Icon";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Toast } from "antd-mobile";
import { local } from "../../utils";
import { SETSONGID } from "../../store/constants";

enum iconClassName {
  home = "icon-maikefeng",
  back = "icon-back"
}

export interface IProps
  extends RouteComponentProps,
    React.HTMLAttributes<React.CSSProperties> {
  type: "home" | "back";
  title?: string;
  style?: React.CSSProperties;
}

class Header extends React.Component<IProps> {
  goTo = () => {
    const { type } = this.props;

    switch (type) {
      case "back":
        this.props.history.goBack();
        break;
      case "home":
        // this.props.history.push('')
        Toast.info("暂未开发哦~");
        break;
    }
  };

  render() {
    const { type, title } = this.props;
    const showTit = type === "back";
    return (
      <header className="header" style={this.props.style}>
        <div className="header-left" onClick={this.goTo}>
          <Icon className={iconClassName[type]}></Icon>
        </div>
        <div className="header-search">
          {showTit ? (
            title
          ) : (
            <input
              type="text"
              placeholder="世间美好与你环环相扣"
              onClick={() => {
                console.log("test");
                this.props.history.push("/search");
              }}
            />
          )}
        </div>
        <div
          className="header-right"
          onClick={() => {
            this.props.history.push(`/play/${local(SETSONGID)}`);
          }}
        >
          <Icon className="icon-audio"></Icon>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
