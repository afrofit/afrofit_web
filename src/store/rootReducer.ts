import { combineReducers } from "redux";
import uiReducer from "./reducers/ui/ui.slice";
import authReducer from "./reducers/auth/auth.slice";

export const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
});
