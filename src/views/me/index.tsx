import * as React from "react";
import Srcoll from "../../components/Scroll";

export default class Me extends React.Component {
  render() {
    return (
      <div
        style={{
          height: "100%",
          backgroundColor: "yellow"
        }}
      >
        <Srcoll>
          <li
            style={{
              height: "100px"
            }}
          >
            <p>1Î</p>
            <p>1Î</p>
            <p>1Î</p>
            <p>1Î</p>
            <p>1Î</p>
          </li>

          <li
            style={{
              height: "500px"
            }}
          >
            <p>2</p>
            <p>2</p>
            <p>2</p>
            <p>2</p>
            <p>2</p>
            <p>2</p>
          </li>
          <li
            style={{
              height: "500px"
            }}
          >
            <p>2</p>
            <p>2</p>
            <p>2</p>
            <p>2</p>
            <p>2</p>
            <p>2</p>
          </li>
        </Srcoll>
      </div>
    );
  }
}
