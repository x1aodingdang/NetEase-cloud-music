import * as React from "react";
import "./index.scss";
import list from "./list";
import { Link } from "react-router-dom";

export default class HomeCategory extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    const items = list.map(v => {
      const { img, id, label, path } = v;
      return (
        <li key={id}>
          <Link to={path}>
            <div className="category-icon">
              <img src={img} alt={label} />
            </div>
            <p className="category-name">{label}</p>
          </Link>
        </li>
      );
    });
    return (
      <div className="home-category">
        <ul className="category-box">{items}</ul>
      </div>
    );
  }
}
