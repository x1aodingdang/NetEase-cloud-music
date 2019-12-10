// src/components/Hello.tsx

import * as React from "react";
import "./index.scss";
import Header from "../../components/Header/";
import Slide from "./components/slide/";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

export default class Home extends React.Component<Props> {
  render() {
    return (
      <div className="home">
        {/* 头部搜索框 */}
        <Header />
        {/* 轮播图 */}
        <Slide />
      </div>
    );
  }
}
