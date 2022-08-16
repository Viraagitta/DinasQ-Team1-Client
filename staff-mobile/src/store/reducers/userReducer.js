import {
  ABSENCE_USER,
  FETCH_USER_DETAIL,
  LOGIN_STAFF,
  UPDATE_PASSWORD,
} from "../action/actionType";

const initialState = { users: [], detailUser: {}, userlocation: [] };

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_STAFF:
      return { ...state, users: action.payload };
    case FETCH_USER_DETAIL:
      return { ...state, detailUser: action.payload };
    case UPDATE_PASSWORD:
      return { ...state, detailUser: action.payload };
    case ABSENCE_USER:
      return { ...state, userlocation: action.payload };
    default:
      return state;
  }
}

export default userReducer;
