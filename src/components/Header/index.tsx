import * as React from "react";
import "./index.scss";
import Icon from "../Icon";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <span className="header-icon-maikefeng">
          <Icon className="icon-maikefeng"></Icon>
        </span>
        <input
          className="search"
          type="text"
          placeholder="世间美好与你环环相扣"
        />
        <span className="header-icon-audio">
          <Icon className="icon-audio"></Icon>
        </span>
      </header>
    );
  }
}
