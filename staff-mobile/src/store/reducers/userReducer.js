import { LOGIN_STAFF, UPDATE_PASSWORD } from "../action/actionType";

const initialState = { users: [], detailUser: [] };

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_STAFF:
      return { ...state, users: action.payload };
    case UPDATE_PASSWORD:
      return { ...state, detailUser: action.payload };
    default:
      return state;
  }
}

export default userReducer;
