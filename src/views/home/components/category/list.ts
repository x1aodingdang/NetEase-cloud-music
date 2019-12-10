type categoryListType = {
  id: number;
  img: string;
  label: string;
};

const list: categoryListType[] = [
  {
    id: 0,
    label: "每日推荐",
    img: require("../../../../assets/images/home/recommend.jpg")
  },
  {
    id: 2,
    label: "歌单",
    img: require("../../../../assets/images/home/playlist.jpg")
  },
  {
    id: 3,
    label: "排行版",
    img: require("../../../../assets/images/home/rank.jpg")
  },
  {
    id: 4,
    label: "电台",
    img: require("../../../../assets/images/home/radiohead.jpg")
  },
  {
    id: 5,
    label: "直播",
    img: require("../../../../assets/images/home/live.jpg")
  }
];

export default list;
