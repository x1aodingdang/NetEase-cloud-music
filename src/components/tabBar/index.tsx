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
// - 获取 路由 history 对象
// 如果 这个组件不被 Route 组件所```直接包裹```(子组件而不是子子组件) 就要是使用 这个装饰来 获取 路由下的属性
// 并且 props 需要 继承 RouteComponentProps

export default withRouter(FooterTabBar);
