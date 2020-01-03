import {
  SETPLAYSTATUS,
  SETSONGID,
  SETCURRENTDURATION,
  SETDURATION,
  SETPLAYERLIST,
  SETMUSISDETAIL,
  SETMUSICURL,
  SETPLAYERINSTANCE
} from "../../constants";
import { IPlayAction } from "../../actions/play";
import { local } from "../../../utils";
import { IMusicDetail, IMusicUrl } from "./interface";
import Player from "../../../servers/player";

export interface IState {
  playerInstance: Player; // 当前播放器实例
  songId: number;
  isPlay: boolean;
  duration: number;
  curDuration: number;
  playList: number[];
  musicDetail: IMusicDetail;
  musicUrl: IMusicUrl;
}
export const initialState: IState = {
  playerInstance: {} as Player,
  songId: local(SETSONGID), // 当前 播放的 id
  isPlay: false, // 音乐是否在播放中
  duration: 0, // 当前音乐的时长  秒为单位
  curDuration: 0, // 当前音乐的播放中进度时长  秒为单位
  playList: local(SETPLAYERLIST) || [],
  musicDetail: {} as IMusicDetail,
  musicUrl: {} as IMusicUrl
};
export const reducer = (state: IState = initialState, action: IPlayAction) => {
  switch (action.type) {
    case SETPLAYERINSTANCE:
      return { ...state, playerInstance: action.player };
    case SETPLAYSTATUS:
      return { ...state, isPlay: action.flag };
    case SETSONGID:
      local(SETSONGID, action.id);
      return { ...state, songId: action.id };
    case SETDURATION:
      return { ...state, duration: action.duration };
    case SETCURRENTDURATION:
      return { ...state, curDuration: action.curDuration };
    case SETPLAYERLIST:
      local(SETPLAYERLIST, action.playerList);
      return { ...state, playList: action.playerList };
    case SETMUSISDETAIL:
      return { ...state, musicDetail: action.musicDetail };
    case SETMUSICURL:
      return { ...state, musicUrl: action.musicUrl };
  }
  return { ...state };
};
