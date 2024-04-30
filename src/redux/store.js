import { combineReducers, createStore } from "redux";
import { balanceReducer } from "./balance";
import { localeReducer } from "./local";

const rootReducer = combineReducers({
  balance: balanceReducer,
  local: localeReducer,
});

export const store = createStore(rootReducer);
