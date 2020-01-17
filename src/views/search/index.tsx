import * as React from "react";
import "./index.scss";
import SearchHotList from "./components/hotList";
import Srcoll from "../../components/Scroll";

export interface iSearchProps {}

export interface iSearchState {
  value: string;
}

// ### 关于 拼音会触发 changge事件的解决方案 ps: 感觉这个计时器的处理方法 稍微有点bug
// 参考 https://juejin.im/post/5d73444cf265da03f565087e

let flag = true;

class Search extends React.Component<iSearchProps, iSearchState> {
  constructor(props: iSearchProps) {
    super(props);
    this.state = {
      value: ""
    };
  }
  inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTimeout(async () => {
      if (flag) {
        await this.setState({ value });
      }
    }, 100);
  };
  render() {
    const {} = this.state;
    return (
      <div className="search">
        {/* 头部搜索 */}
        <div className="head">
          <div className="head-search">
            <input
              type="text"
              placeholder="搜索"
              // onChange={this.inputChange}
              onCompositionStart={() => {
                flag = false;
              }}
              onCompositionEnd={() => {
                flag = true;
              }}
              onInput={this.inputChange}
            />
          </div>
          <span>取消</span>
        </div>
        <Srcoll>
          {/* 搜索历史记录 */}
          <div></div>
          {/* 热门搜索 */}

          <SearchHotList />
        </Srcoll>
      </div>
    );
  }
}

export default Search;
