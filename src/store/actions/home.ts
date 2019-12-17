import { SETBANNERLIST } from "../constants";
import { http } from "../../api/http";
import { $APIbanner } from "../../api/apiList";
import { bannerListContent } from "../reducers/home";
import { Dispatch } from "redux";

// import {} from '../reducers/home'

export interface ISETBANNERLIST {
  type: typeof SETBANNERLIST;
  bannerList: bannerListContent[];
}

export type IHomeAction = ISETBANNERLIST;

export const setBannerList = (
  bannerList: bannerListContent[]
): ISETBANNERLIST => {
  return { type: SETBANNERLIST, bannerList };
};

export const getBannerList: () => any = () => {
  return (dispatch: Dispatch): Promise<void> => {
    return http($APIbanner, { data: { type: 2 } }).then((res: any) => {
      // const banners: bannerListContent[] = res.banners;
      dispatch(setBannerList(res.banners));
    });
  };
};
