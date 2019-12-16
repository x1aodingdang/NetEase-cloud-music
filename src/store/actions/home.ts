import { BANNERLIST, BANNERLIST_TYPE } from "../constants";

export interface BANNERLISTAction {
  type: BANNERLIST_TYPE;
}

export const bannerList = (): BANNERLISTAction => {
  return { type: BANNERLIST };
};
