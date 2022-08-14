import { FETCH_LIST_EMPLOYEES, LOGIN_USER } from "../action/actionType";

const initialState = { employees: [], users: [] };

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, users: action.payload };
    case FETCH_LIST_EMPLOYEES:
      return { ...state, employees: action.payload };
    default:
      return state;
  }
}

export default userReducer;
