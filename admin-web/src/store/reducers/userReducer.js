import {
  CREATE_USER,
  DELETE_USER_DETAIL,
  EDIT_USER_DETAIL,
  FETCH_LIST_EMPLOYEES,
  FETCH_USER_DETAIL,
  LOGIN_USER,
  DELETE_USER,
  DETAILS_USER,
  USER_LOCATION,
  FETCH_USER_LOGGEDIN,
} from "../action/actionType";

const initialState = {
  employees: [],
  users: [],
  details: [],
  locationUser: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      console.log("b");
      return { ...state, users: action.payload };
    case FETCH_LIST_EMPLOYEES:
      console.log("k");
      return { ...state, users: action.payload };
    case FETCH_USER_DETAIL:
      return { ...state, detailUser: action.payload };
    case FETCH_USER_LOGGEDIN:
      return { ...state, detailUser: action.payload };
    case CREATE_USER:
      return { ...state, users: action.payload };
    case DELETE_USER:
      return { ...state, users: action.payload };
    case DETAILS_USER:
      return { ...state, details: action.payload };
    case USER_LOCATION:
      return { ...state, locationUser: action.payload };
    case EDIT_USER_DETAIL:
      return { ...state, detailUser: action.payload };
    case DELETE_USER_DETAIL:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}

export default userReducer;
