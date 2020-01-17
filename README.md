## 仿网易云 app

长路漫漫 唯 codeing 作伴

## 使用

- 请先把 [NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi) 项目 download 下来 并启动 (启动后的服务作为后端服务给本项目使用)

  ##### 安装 [NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)

  - `git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git`
  - `cd NeteaseCloudMusicApi`
  - `npm i`
  - `node app.js`

  ##### 安装 [NetEase-cloud-music](https://github.com/x1aodingdang/NetEase-cloud-music)

  - `git clone https://github.com/x1aodingdang/NetEase-cloud-music.git`
  - `cd NetEase-cloud-music`
  - `npm i`
  - `npm run dev`

## 环境变量

- REACT_APP_API (后端服务地址)
- REACT_APP_SERVER_PROT (后端服务端口)
- PROT (前端服务端口)

  ##### 例子 🌰

  - ##### Windows (cmd.exe)
    `set "REACT_APP_API=http://localhost:9000" && npm start`
  - ##### Windows (Powershell)
    `($env:REACT_APP_API = "http://localhost:9000") -and (npm start)`
  - ##### Linux, macOS (Bash)
    `REACT_APP_API=http://localhost:9000 npm start`

## 技术栈

- react ts redux redux-thunk ant-mobile
- [NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi) （使用这个来获取网易云数据）感谢大佬

## 预览

![113](./docs/demo.gif)

## Roadmap
