import { SETPLAYSTATUS, SETSONGID } from "../constants";
import { IPlayStatus, IPlayAction } from "../actions/play";

export interface IState {
  songId: number;
  isPlay: boolean;
}
export const initialState: IState = {
  songId: 1363948882, // 当前 播放的 id 1363948882
  // 无版权的 1363948882  // 正常的 1363948882
  isPlay: false // 音乐是否在播放中
};
export const reducer = (state: IState = initialState, action: IPlayAction) => {
  switch (action.type) {
    case SETPLAYSTATUS:
      return { ...state, isPlay: action.flag };
    case SETSONGID:
      return { ...state, songId: action.id };
  }
  return { ...state };
};
