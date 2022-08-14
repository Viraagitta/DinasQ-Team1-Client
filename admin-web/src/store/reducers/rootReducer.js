import { combineReducers } from "redux";
import letterReducer from "./letterReducer";
import reimbursementReducer from "./reimbursementReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  reimburse: reimbursementReducer,
  letter: letterReducer,
});
export default rootReducer;
