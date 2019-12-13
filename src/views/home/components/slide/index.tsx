// 首页 轮播

import * as React from "react";
import "./index.scss";
import { Carousel, WingBlank } from "antd-mobile";
import { http } from "../../../../api/http";
import { $APIbanner } from "../../../../api/apiList";

enum BgColor {
  red = "#e95f4d",
  blue = "#5ea3ea"
}

export type SlideItemType = {
  pic: string;
  bannerId: string;
  url: string;
  typeTitle: string;
  titleColor: "red" | "blue";
};

export default class Slide extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    // 请求 banner
    this.getBanner();
    console.log("slide 请求数据 但是render 了");
  }

  componentDidUpdate() {
    // console.log(this);
    console.log("slide DidUpdate 了");
  }

  getBanner = () => {
    http($APIbanner, { data: { type: 2 } }).then((res: any) => {
      const { banners } = res;
      this.setState({
        data: banners
      });
    });
  };

  render() {
    console.log("slide render ");
    return (
      <div className="home-banner">
        <WingBlank>
          <Carousel
            autoplay={true}
            infinite
            cellSpacing={10}
            dotActiveStyle={{
              backgroundColor: "#eb4d44"
            }}
          >
            {this.state.data.map((item: SlideItemType) => {
              const { pic, bannerId, url, typeTitle, titleColor } = item;
              return (
                <a
                  key={bannerId}
                  href={url}
                  style={{
                    display: "inline-block",
                    width: "100%"
                  }}
                >
                  <img
                    src={pic}
                    alt=""
                    style={{
                      width: "100%",
                      verticalAlign: "top"
                    }}
                  />
                  <div
                    className="tag"
                    style={{
                      backgroundColor: BgColor[titleColor]
                    }}
                  >
                    {typeTitle}
                  </div>
                </a>
              );
            })}
          </Carousel>
        </WingBlank>
      </div>
    );
  }
}
