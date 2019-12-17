import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import { State, reducer, initialState } from "./reducers";

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunkMiddleware)
);

export default store;

export interface StoreState extends State {}
