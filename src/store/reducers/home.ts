import { SETBANNERLIST, SETPLAYLIST } from "../constants/index";
import { ISetBannerList, IPlayList } from "../actions/home";
import { IHomeAction } from "../actions/home";

export interface IState {
  bannerList: IBannerListContent[];
  playList: IPlayListContent[];
}
/**
 *  轮播图
 */
export interface IBannerListContent {
  pic: string;
  bannerId: string;
  url: string;
  typeTitle: string;
  titleColor: "red" | "blue";
}

/**
 *  首页推荐歌单
 */
export interface IPlayListContent {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: number;
  playCount: number;
  trackCount: number;
  highQuality: boolean;
  alg: string;
}

export const initialState: IState = {
  bannerList: [],
  playList: []
};

const actions = {
  [SETBANNERLIST]: (state: IState, action: ISetBannerList) => {
    return {
      ...state,
      bannerList: action.bannerList
    };
  },
  [SETPLAYLIST]: (state: IState, action: IPlayList) => {
    return {
      ...state,
      playList: action.playList
    };
  }
};

export const reducer = (state: IState = initialState, action: IHomeAction) => {
  switch (action.type) {
    case SETBANNERLIST:
      return actions[action.type](state, action);
    case SETPLAYLIST:
      return actions[action.type](state, action);
    default:
      return {
        ...state
      };
  }
  // 看能不能 优化成下面 一样  
  // if (typeof actions[action.type] === "function") {
  // 为什么会有这个判断   一开始 这个函数会 执行一遍   type: "@@redux/INIT5.s.9.p.p.8" 会出现这个值  所以过滤一下  （具体原因等待查证）
  //   return actions[action.type](state, action); // 类型“IHomeAction”的参数不能赋给类型“ISetBannerList & IPlayList”的参数
  // }
  // return { ...state };
};
