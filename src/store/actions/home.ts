import { SETBANNERLIST, SETPLAYLIST } from "../constants";
import { http } from "../../api/http";
import { $APIbanner, $APIHomeRecommendPlayList } from "../../api/apiList";
import { IBannerListContent, IPlayListContent } from "../reducers/home";
import { Dispatch } from "redux";

export interface ISetBannerList {
  type: typeof SETBANNERLIST;
  bannerList: IBannerListContent[];
}

export interface IPlayList {
  type: typeof SETPLAYLIST;
  playList: IPlayListContent[];
}

export type IHomeAction = ISetBannerList | IPlayList;

export const setBannerList = (
  bannerList: IBannerListContent[]
): ISetBannerList => {
  return { type: SETBANNERLIST, bannerList };
};

export const setPlayList = (playList: IPlayListContent[]) => {
  return {
    type: SETPLAYLIST,
    playList
  };
};

export const getBannerList: () => any = () => {
  return (dispatch: Dispatch): Promise<void> => {
    return http($APIbanner, { data: { type: 2 } }).then((res: any) => {
      dispatch(setBannerList(res.banners));
    });
  };
};

export const getPlayList: () => any = () => {
  return (dispatch: Dispatch): Promise<void> => {
    return http($APIHomeRecommendPlayList, { data: { limit: 6 } }).then(
      (res: any) => {
        dispatch(setPlayList(res.result));
      }
    );
  };
};
