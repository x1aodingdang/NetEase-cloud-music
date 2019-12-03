import Home from "../views/home/index";

export default [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/home2",
    component: Home
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
