import {
  SETPLAYSTATUS,
  SETSONGID,
  SETCURRENTDURATION,
  SETDURATION
} from "../constants";
import { IPlayAction } from "../actions/play";
import { local } from "../../utils";

export interface IState {
  songId: number;
  isPlay: boolean;
  duration: number;
  curDuration: number;
}
export const initialState: IState = {
  songId: local(SETSONGID), // 当前 播放的 id 1363948882
  // 无版权的 1363948882  // 正常的 1363948882
  isPlay: false, // 音乐是否在播放中
  duration: 0, // 当前音乐的时长  秒为单位
  curDuration: 0 // 当前音乐的播放中进度时长  秒为单位
};
export const reducer = (state: IState = initialState, action: IPlayAction) => {
  switch (action.type) {
    case SETPLAYSTATUS:
      return { ...state, isPlay: action.flag };
    case SETSONGID:
      local(SETSONGID, action.id);
      return { ...state, songId: action.id };
    case SETDURATION:
      return { ...state, duration: action.duration };
    case SETCURRENTDURATION:
      return { ...state, curDuration: action.curDuration };
  }
  return { ...state };
};
