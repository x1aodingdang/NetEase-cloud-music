import * as React from "react";
import tabBarList from "./tabBarList";
import "./index.scss";
import Icon from "../Icon";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}

type State = {
  // history: any;
};

class FooterTabBar extends React.Component<Props> {
  // static contextTypes = {
  //   router: PropTypes.object
  // };
  // constructor(props: Props, context: State) {
  //   super(props, context);
  // }
  jump = (path: string) => {
    this.props.history.push(path);
    // this.context.router.history.push(path);
  };

  render() {
    const { pathname } = this.props.location;
    const items = tabBarList.map(v => {
      const { icon, id, label, path } = v;
      return (
        <li
          key={id}
          className={`tabBar-item  ${pathname.includes(path) && "active"}`}
          onClick={() => {
            this.jump(path);
          }}
        >
          <div className="item-icon">
            <Icon className={icon} />
          </div>
          <p className="item-name">{label}</p>
        </li>
      );
    });
    return (
      <div className="footer-tabBar">
        <ul className="tabBar-container">{items}</ul>
      </div>
    );
  }
}

//withRouter
// 为什么使用 withRouter 装饰器
// - 获取 路由 history 对象 (注意  这种方式 该组件必须有 router 组件包裹)

export default withRouter(FooterTabBar);
