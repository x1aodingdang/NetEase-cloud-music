import { ModifyAction } from "../actions";
import { INCREMENT_VALUE, DECREMENT_VALUE } from "../constants/index";
export interface State {
  value: number;
}

export const initialState: State = {
  value: 5
};

const actions = {
  [INCREMENT_VALUE]: (state: State = initialState, action: ModifyAction) => {
    return {
      ...state,
      value: state.value + 1
    };
  },
  [DECREMENT_VALUE]: (state: State = initialState, action: ModifyAction) => {
    return {
      ...state,
      value: state.value - 1
    };
  }
};

export const reducer = (state: State = initialState, action: ModifyAction) => {
  // console.log(actions, action);

  if (typeof actions[action.type] === "function") {
    // 为什么会有这个判断   一开始 这个函数会 执行一遍   type: "@@redux/INIT5.s.9.p.p.8" 会出现这个值  所以过滤一下  （具体原因等待查证）
    return actions[action.type](state, action);
  }
  return { ...state };
};
