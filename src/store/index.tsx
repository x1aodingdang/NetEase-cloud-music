import { createStore } from "redux";

import { State, reducer, initialState } from "./reducers";

const store = createStore(reducer, initialState);

export default store;

export interface StoreState extends State {}
