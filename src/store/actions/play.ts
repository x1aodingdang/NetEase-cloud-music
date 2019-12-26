import { SETPLAYSTATUS, SETSONGID } from "../constants";

export interface IPlayStatus {
  type: typeof SETPLAYSTATUS;
  flag: boolean;
}
export interface ISongId {
  type: typeof SETSONGID;
  id: number;
}

export type IPlayAction = IPlayStatus | ISongId;

export const setIPlayStatus = (isPlay: boolean): IPlayStatus => {
  return {
    type: SETPLAYSTATUS,
    flag: isPlay
  };
};
