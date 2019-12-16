import { BANNERLIST } from "../constants/index";

export interface State {
  bannerList: StateContent[];
}
export interface StateContent {
  pic: string;
  bannerId: string;
  url: string;
  typeTitle: string;
  titleColor: "red" | "blue";
}

export const initialState = {
  bannerList: []
};

const actions = {
  [BANNERLIST]: (state: State) => {
    return state.bannerList;
  }
};

export const reducer = (
  state: State = initialState
  // action: ModifyAction1
) => {
  console.log("?");
  return { ...state };
};
