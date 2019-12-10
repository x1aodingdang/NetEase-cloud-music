// src/components/Hello.tsx

import * as React from "react";
import Header from "../../components/Header/index";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

export default class Home extends React.Component<Props> {
  render() {
    return (
      <div className="home">
        <Header></Header>
      </div>
    );
  }
}
