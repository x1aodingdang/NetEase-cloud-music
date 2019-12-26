// icon 字体图标  采用的是阿里的字体图标库   Symbol 方式 生成一个  需要在模板html引入一个js文件

import * as React from "react";

export interface IconProps extends React.HTMLAttributes<React.CSSProperties> {
  className: string;
}

/**
 * @description 使用方法 <Icon className='icon-maikefeng'> </Icon>
 * @description 弃用  使用方法 <Icon>&#xe617;</Icon>
 */
export default class Icon extends React.Component<IconProps> {
  render() {
    const { className } = this.props;
    // return <i className="iconfont">{children}</i>;
    return (
      <svg className="icon" aria-hidden="true">
        <use href={`#${className}`}></use>
      </svg>
    );
  }
}
