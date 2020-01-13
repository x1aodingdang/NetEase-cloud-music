## 仿网易云 app

长路漫漫 唯 codeing 作伴

## 使用

`npm start`

## 环境变量

- REACT_APP_API (后端服务地址)
- REACT_APP_SERVER_PROT (后端服务端口)
- PROT (前端服务端口)

#### 例子 🌰

- ##### Windows (cmd.exe)
  `set "REACT_APP_API=http://localhost:9000" && npm start`
- ##### Windows (Powershell)
  `($env:REACT_APP_API = "http://localhost:9000") -and (npm start)`
- ##### Linux, macOS (Bash)
  `REACT_APP_API=http://localhost:9000 npm start`

## 技术栈

- react ts redux redux-thunk ant-mobile
- [NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi) （使用这个来获取网易云数据）

## 预览

![113](./docs/demo.gif)
