// 首页 轮播

import * as React from "react";
import "./index.scss";
import { Carousel, WingBlank } from "antd-mobile";
import { connect } from "react-redux";
import { StoreState } from "../../../../store";
import { IBannerListContent } from "../../../../store/reducers/home";

enum BgColor {
  red = "#e95f4d",
  blue = "#5ea3ea"
}

export interface IProps {
  bannerList: IBannerListContent[];
}

class Slide extends React.Component<IProps> {
  render() {
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
            {this.props.bannerList.map((item: IBannerListContent) => {
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

export default connect((s: StoreState) => ({
  bannerList: s.home.bannerList
}))(Slide);
