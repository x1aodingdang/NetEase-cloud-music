// src/components/Hello.tsx

import * as React from "react";
import Header from "../../components/Header/index";
import Slide from "./components/slide";
import { http } from "../../api/http";
import { Button } from "antd-mobile";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

export default class Home extends React.Component<Props> {
  render() {
    return (
      <div className="home">
        <Header />
        <Slide />
      </div>
    );
  }
}
