import { SETBANNERLIST } from "../constants/index";
import { ISETBANNERLIST } from "../actions/home";
import { IHomeAction } from "../actions/home";

export interface State {
  bannerList: bannerListContent[];
}
export interface bannerListContent {
  pic: string;
  bannerId: string;
  url: string;
  typeTitle: string;
  titleColor: "red" | "blue";
}

export const initialState: State = {
  bannerList: []
};

const actions = {
  [SETBANNERLIST]: (state: State, action: ISETBANNERLIST) => {
    return {
      ...state,
      bannerList: action.bannerList
    };
  }
};

export const reducer = (state: State = initialState, action: IHomeAction) => {
  // switch (action.type) {
  //   // case BANNERLIST:
  //   //   return actions[action.type](state);
  //   case SETBANNERLIST:
  //     return actions[action.type](state, action);
  //   default:
  //     return { ...state };
  // }
  if (typeof actions[action.type] === "function") {
    return actions[action.type](state, action);
  }
  return { ...state };
};
