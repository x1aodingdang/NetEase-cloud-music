import { SETBANNERLIST, SETPLAYLIST } from "../constants/index";
import { ISETBANNERLIST, IPlayList } from "../actions/home";
import { IHomeAction } from "../actions/home";

export interface State {
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

export const initialState: State = {
  bannerList: [],
  playList: []
};

const actions = {
  [SETBANNERLIST]: (state: State, action: ISETBANNERLIST) => {
    return {
      ...state,
      bannerList: action.bannerList
    };
  },
  [SETPLAYLIST]: (state: State, action: IPlayList) => {
    return {
      ...state,
      playList: action.playList
    };
  }
};

export const reducer = (state: State = initialState, action: IHomeAction) => {
  switch (action.type) {
    case SETBANNERLIST:
      return actions[action.type](state, action);
    case SETPLAYLIST:
      return actions[action.type](state, action);
    default:
      return { ...state };
  }
  // 看能不能 优化成下面 一样  
  // if (typeof actions[action.type] === "function") {
  //   return actions[action.type](state, action); // 类型“IHomeAction”的参数不能赋给类型“ISETBANNERLIST & IPlayList”的参数
  // }
  // return { ...state };
};
