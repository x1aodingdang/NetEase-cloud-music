import {
  INCREMENT_VALUE,
  INCREMENT_VALUE_TYPE,
  DECREMENT_VALUE,
  DECREMENT_VALUE_TYPE
} from "../constants/index";

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
export const decrement = (): IDECREMENT_VALUEAction => {
  return {
    type: DECREMENT_VALUE
  };
};
