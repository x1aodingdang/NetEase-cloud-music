import {
  SETPLAYSTATUS,
  SETSONGID,
  SETDURATION,
  SETCURRENTDURATION
} from "../constants";

export interface IPlayStatus {
  type: typeof SETPLAYSTATUS;
  flag: boolean;
}
export interface ISongId {
  type: typeof SETSONGID;
  id: number;
}
export interface IDuration {
  type: typeof SETDURATION;
  duration: number;
}
export interface ICURRENTDURATION {
  type: typeof SETCURRENTDURATION;
  curDuration: number;
}

export type IPlayAction = IPlayStatus | ISongId | ICURRENTDURATION | IDuration;

export const setPlayStatus = (isPlay: boolean): IPlayStatus => {
  return {
    type: SETPLAYSTATUS,
    flag: isPlay
  };
};

export const setSongId = (id: number): ISongId => {
  return {
    type: SETSONGID,
    id
  };
};
export const setDuration = (duration: number): IDuration => {
  return {
    type: SETDURATION,
    duration
  };
};
export const setCurrentDuration = (curDuration: number): ICURRENTDURATION => {
  return {
    type: SETCURRENTDURATION,
    curDuration
  };
};
