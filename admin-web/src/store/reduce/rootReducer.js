import { FETCH_LIST_EMPLOYEES } from "../action/actionType";

const initialState = { employees: [] };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST_EMPLOYEES:
      return { ...state, employees: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
