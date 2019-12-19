export interface ITabBarList {
  id: number;
  label: string;
  icon: string;
  path: string;
}

export type tabBarListType = Array<ITabBarList>;

const tabBarList: tabBarListType = [
  {
    id: 0,
    label: "发现",
    icon: "icon-yinle2",
    path: "/home"
  },
  {
    id: 1,
    label: "视频",
    icon: "icon-shipin",
    path: "/video"
  },
  {
    id: 2,
    label: "我的",
    icon: "icon-yinle",
    path: "/me"
  },
  {
    id: 3,
    label: "云村",
    icon: "icon-zy_qunzuduoren",
    path: "/cloud"
  },
  {
    id: 4,
    label: "账号",
    icon: "icon-wode",
    path: "/account"
  }
];

export default tabBarList;
