import { combineReducers } from "redux";

import * as Test from "./test";
import * as Home from "./home";

// 模块命名空间
const TEST = "test";
const HOME = "home";

export interface State {
  [TEST]: Test.State;
  [HOME]: Home.State;
}

export const initialState: State = {
  [TEST]: Test.initialState,
  [HOME]: Home.initialState
};

export const reducer = combineReducers<State>({
  [TEST]: Test.reducer,
  [HOME]: Home.reducer
});
