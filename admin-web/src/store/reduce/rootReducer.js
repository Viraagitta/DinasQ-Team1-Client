import { FETCH_LIST_EMPLOYEES, LOGIN_USER } from "../action/actionType";

const initialState = { employees: [], users: [] };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST_EMPLOYEES:
      return { ...state, employees: action.payload };
    case LOGIN_USER:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
