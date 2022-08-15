import {
  CREATE_USER,
  FETCH_LIST_EMPLOYEES,
  LOGIN_USER,
  DELETE_USER,
  DETAILS_USER,
} from "../action/actionType";

const initialState = { employees: [], users: [], details: [] };

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, users: action.payload };
    case FETCH_LIST_EMPLOYEES:
      return { ...state, employees: action.payload };
    case CREATE_USER:
      return { ...state, users: action.payload };
    case DELETE_USER:
      return { ...state, users: action.payload };
    case DETAILS_USER:
      console.log("kepanggil");
      return { ...state, details: action.payload };
    default:
      return state;
  }
}

export default userReducer;
