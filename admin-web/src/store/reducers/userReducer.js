import {
  CREATE_USER,
  DELETE_USER_DETAIL,
  EDIT_USER_DETAIL,
  FETCH_LIST_EMPLOYEES,
  FETCH_USER_DETAIL,
  LOGIN_USER,
} from "../action/actionType";

const initialState = { users: [], detailUser: {} };

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, users: action.payload };
    case FETCH_LIST_EMPLOYEES:
      return { ...state, users: action.payload };
    case FETCH_USER_DETAIL:
      return { ...state, detailUser: action.payload };
    case CREATE_USER:
      return { ...state, users: action.payload };
    case EDIT_USER_DETAIL:
      return { ...state, detailUser: action.payload };
    case DELETE_USER_DETAIL:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}

export default userReducer;
