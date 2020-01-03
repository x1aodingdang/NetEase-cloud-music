import { combineReducers } from "redux";
import { History } from "history";
import { connectRouter, RouterState } from "connected-react-router";

import * as Home from "./home";
import * as RankList from "./ranking";
import * as Play from "./play/";

// 模块命名空间
const HOME = "home";
const RANKLIST = "rankList";
const PLAY = "play";

export interface State {
  router: RouterState;
  [HOME]: Home.IState;
  [RANKLIST]: RankList.IState;
  [PLAY]: Play.IState;
}

export const initialState: State = {
  router: {} as RouterState,
  [HOME]: Home.initialState,
  [RANKLIST]: RankList.initialState,
  [PLAY]: Play.initialState
};

export const reducer = (history: History) =>
  combineReducers<State>({
    router: connectRouter(history),
    [HOME]: Home.reducer,
    [RANKLIST]: RankList.reducer,
    [PLAY]: Play.reducer
  });

// export const reducer = combineReducers<State>({
//   [HOME]: Home.reducer,
//   [RANKLIST]: RankList.reducer,
//   [PLAY]: Play.reducer
// });
