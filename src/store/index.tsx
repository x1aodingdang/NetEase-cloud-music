import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createBrowserHistory } from "history";
import { State, reducer, initialState } from "./reducers";
import { routerMiddleware } from "react-router-redux";

export const history = createBrowserHistory();

// const store = createStore(
//   // createRootReducer(history),
//   reducer(history),
//   // reducer,
//   initialState,
//   compose(routerMiddleware(history), applyMiddleware(thunkMiddleware))
// );

// export default store;

export default function configureStore(preloadedState?: any) {
  const composeEnhancer: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducer(history),
    // reducer,
    initialState,
    // composeEnhancer(applyMiddleware(thunkMiddleware), routerMiddleware(history))
    composeEnhancer(applyMiddleware(routerMiddleware(history)))
  );

  return store;
}

export interface StoreState extends State {}
