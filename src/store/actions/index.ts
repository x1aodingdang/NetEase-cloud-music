import {
  INCREMENT_VALUE,
  INCREMENT_VALUE_TYPE,
  DECREMENT_VALUE_TYPE
} from "../constants/index";
import { Dispatch } from "redux";

export interface IINCREMENT_VALUEAction {
  type: INCREMENT_VALUE_TYPE;
}
export interface IDECREMENT_VALUEAction {
  type: DECREMENT_VALUE_TYPE;
}
export type ModifyAction = IINCREMENT_VALUEAction | IDECREMENT_VALUEAction;

export const increment = (): IINCREMENT_VALUEAction => ({
  type: INCREMENT_VALUE
});
// | IDECREMENT_VALUEAction
// |
// () => Promise<void>
export const decrement = (): any => {
  return function(dispatch: Dispatch): Promise<void> {
    // dispatch
    // dispatch(increment);
    return new Promise<void>(res => {
      setTimeout(() => {
        res();
      }, 1000);
    }).then(() => {
      dispatch(increment());
    });
  };

  // return {
  //   type: DECREMENT_VALUE
  // };
};
