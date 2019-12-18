export interface categoryListType {
  id: number;
  img: string;
  label: string;
  path: string;
}

const list: categoryListType[] = [
  {
    id: 0,
    label: "每日推荐",
    img: require("../../../../assets/images/home/recommend.jpg"),
    path: ""
  },
  {
    id: 2,
    label: "歌单",
    img: require("../../../../assets/images/home/playlist.jpg"),
    path: ""
  },
  {
    id: 3,
    label: "排行榜",
    img: require("../../../../assets/images/home/rank.jpg"),
    path: "/ranking"
  },
  {
    id: 4,
    label: "电台",
    img: require("../../../../assets/images/home/radiohead.jpg"),
    path: ""
  },
  {
    id: 5,
    label: "直播",
    img: require("../../../../assets/images/home/live.jpg"),
    path: ""
  }
];

export default list;
