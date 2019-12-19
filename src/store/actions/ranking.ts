import { Dispatch } from "redux";
import { http } from "../../api/http";
import { $APIRankList } from "../../api/apiList";
import { SETRANKOFFCIALLIST } from "../constants";
import { IRankOfficialList } from "../reducers/ranking";

export interface ISETRANKOFFCIALLIST {
  type: typeof SETRANKOFFCIALLIST;
  rankOfficialList: IRankOfficialList;
}

export const setRankOfficialList = (
  rankOfficialList: IRankOfficialList
): ISETRANKOFFCIALLIST => {
  return {
    type: SETRANKOFFCIALLIST,
    rankOfficialList
  };
};

/**
 * 获取 排行榜 官方榜数据 摘要 //https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e6%89%80%e6%9c%89%e6%a6%9c%e5%8d%95%e5%86%85%e5%ae%b9%e6%91%98%e8%a6%81
 * 排序可能不一样
 */
export const getRankOfficialList = (): any => {
  return (dispatch: Dispatch) => {
    return http($APIRankList).then((res: any) => {
      // 取前四条信息
      dispatch(setRankOfficialList(res.list.splice(0, 4)));
    });
  };
};
// export const getRankOfficialList = (opt: IHttpOpt): any => {
//   return (dispatch: Dispatch) => {
//     return http($APIRankDetail, opt).then(res => {
//       // dispatch(setRankOfficialList(res));
//     });
//   };
// };
