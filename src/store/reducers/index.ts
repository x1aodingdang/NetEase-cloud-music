import { combineReducers } from "redux";

import * as Home from "./home";

// 模块命名空间
const HOME = "home";

export interface State {
  [HOME]: Home.State;
}

export const initialState: State = {
  [HOME]: Home.initialState
};

export const reducer = combineReducers<State>({
  [HOME]: Home.reducer
});
