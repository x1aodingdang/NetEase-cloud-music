import * as React from "react";
import tabBarList from "./tabBarList";
import "./index.scss";
import Icon from "../Icon";

export default class FooterTabBar extends React.Component {
  jump = (path: string) => {};

  render() {
    const items = tabBarList.map(v => {
      const { icon, id, label, path } = v;
      return (
        // <li key={id} className="tabBar-item">
        <li
          key={id}
          className={`tabBar-item ${id === 0 && "active"}`}
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
