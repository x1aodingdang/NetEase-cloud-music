import Home from "../views/home/index";
import Me from "../views/me/index";
import Video from "../views/video/index";
import Cloud from "../views/cloud/index";
import Account from "../views/account/index";
import Ranking from "../views/ranking/index";
import RankingDetail from "../views/ranking/detail/index";
import Play from "../views/play";
import Search from "../views/search";

// export interface iRouterList {

// }

export default [
  {
    path: "/home",
    component: Home,
    tabBar: true // 展示 底部 菜单
    // header: true // 展示搜索头
  },
  {
    path: "/search",
    component: Search,
    tabBar: true // 展示 底部 菜单
    // header: true // 展示搜索头
  },
  {
    path: "/me",
    component: Me,
    tabBar: true
  },
  {
    path: "/video",
    component: Video,
    tabBar: true
  },
  {
    path: "/cloud",
    component: Account,
    tabBar: true
  },
  {
    path: "/account",
    component: Cloud,
    tabBar: true
  },
  {
    path: "/ranking/detail/:id",
    component: RankingDetail,
    tabBar: true
  },
  {
    path: "/ranking",
    component: Ranking,
    tabBar: true
  },
  // 播放音乐页面
  {
    path: "/play/:id",
    component: Play,
    tabBar: false
  },
  // {
  //   path: "/tacos",
  //   component: Tacos,
  //   routes: [
  //     {
  //       path: "/tacos/bus",
  //       component: Bus
  //     },
  //     {
  //       path: "/tacos/cart",
  //       component: Cart
  //     }
  //   ]
  // }
  {
    path: "/",
    redirect: "/home"
  }
];
