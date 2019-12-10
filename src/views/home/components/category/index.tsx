import * as React from "react";
import "./index.scss";
import list from "./list";

export default class HomeCategory extends React.Component {
  render() {
    const items = list.map(v => {
      const { img, id, label } = v;
      return (
        <li key={id}>
          <div className="category-icon">
            <img src={img} alt={label} />
          </div>
          <p className="category-name">{label}</p>
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
