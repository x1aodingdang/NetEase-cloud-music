export interface IState {
  songId: number;
}
export const initialState: IState = {
  songId: 1410490187 // 当前 播放的 id
};

export const reducer = (state: IState = initialState) => {
  return { ...state };
};
