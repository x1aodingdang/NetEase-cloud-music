import Home from "../views/home/index";
import Me from "../views/me/index";

// export interface iRouterList {

// }

export default [
  {
    path: "/home",
    component: Home,
    tabBar: true, // 展示 底部 菜单
    header: true // 展示搜索头
  },
  {
    path: "/me",
    component: Me,
    tabBar: true, // 展示 底部 菜单
    header: false // 展示搜索头
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
