export interface IOfficialList {
  id: number;
  title: string;
  subTit: string;
  icon: string;
}

const list: IOfficialList[] = [
  {
    id: 3,
    title: "飙升榜",
    subTit: "每天更新",
    icon: require("../../../assets/images/ranking/surge.jpg")
  },
  {
    id: 0,
    title: "新歌榜",
    subTit: "每天更新",
    icon: require("../../../assets/images/ranking/new.jpg")
  },
  {
    id: 1,
    title: "热歌榜",
    subTit: "每周四更新",
    icon: require("../../../assets/images/ranking/hot.jpg")
  },
  {
    id: 2,
    title: "原创榜",
    subTit: "每周四更新",
    icon: require("../../../assets/images/ranking/original.jpg")
  }
];

export default list;
