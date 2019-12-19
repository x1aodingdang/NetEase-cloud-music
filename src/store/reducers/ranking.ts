import { SETRANKOFFCIALLIST } from "../constants";
import { ISETRANKOFFCIALLIST } from "../actions/ranking";

export interface IState {
  rankOfficialList: IRankOfficialList;
}

export const initialState: IState = {
  rankOfficialList: []
};

export interface ITrack {
  first: string;
  second: string;
}

export interface IRankOfficialListContent {
  subscribers: any[];
  subscribed: null;
  creator: null;
  artists: null;
  tracks: ITrack[];
  updateFrequency: string;
  backgroundCoverId: number;
  backgroundCoverUrl: null;
  titleImage: number;
  titleImageUrl: null;
  englishTitle: null;
  opRecommend: boolean;
  recommendInfo: null;
  adType: number;
  trackNumberUpdateTime: number;
  subscribedCount: number;
  cloudTrackCount: number;
  highQuality: boolean;
  createTime: number;
  userId: number;
  updateTime: number;
  coverImgId: number;
  newImported: boolean;
  anonimous: boolean;
  totalDuration: number;
  specialType: number;
  coverImgUrl: string;
  trackCount: number;
  commentThreadId: string;
  privacy: number;
  trackUpdateTime: number;
  playCount: number;
  ordered: boolean;
  tags: any[];
  description: string;
  status: number;
  name: string;
  id: number;
  coverImgId_str: string;
  ToplistType: string;
}

export type IRankOfficialList = IRankOfficialListContent[];

const actions = {
  [SETRANKOFFCIALLIST]: (
    state: IState = initialState,
    action: ISETRANKOFFCIALLIST
  ) => {
    return {
      ...state,
      rankOfficialList: action.rankOfficialList
    };
  }
};
export const reducer = (
  state: IState = initialState,
  action: ISETRANKOFFCIALLIST
) => {
  switch (action.type) {
    case SETRANKOFFCIALLIST:
      return actions[action.type](state, action);
    default:
      return { ...state };
  }
};
