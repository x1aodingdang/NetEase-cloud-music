import { combineReducers } from "redux";

import * as Home from "./home";
import * as RankList from "./ranking";
import * as Play from "./play/";

// 模块命名空间
const HOME = "home";
const RANKLIST = "rankList";
const PLAY = "play";

export interface State {
  [HOME]: Home.IState;
  [RANKLIST]: RankList.IState;
  [PLAY]: Play.IState;
}

export const initialState: State = {
  [HOME]: Home.initialState,
  [RANKLIST]: RankList.initialState,
  [PLAY]: Play.initialState
};

export const reducer = combineReducers<State>({
  [HOME]: Home.reducer,
  [RANKLIST]: RankList.reducer,
  [PLAY]: Play.reducer
});
