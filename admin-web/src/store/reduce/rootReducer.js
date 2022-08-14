import {
  FETCH_LIST_EMPLOYEES,
  FETCH_LIST_OFFICIALLETTERS,
  FETCH_LIST_REIMBURSEMENT,
} from "../action/actionType";

const initialState = { employees: [], reimbursements: [], officialLetters: [] };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST_EMPLOYEES:
      return { ...state, employees: action.payload };
    case FETCH_LIST_REIMBURSEMENT:
      return { ...state, reimbursements: action.payload };
    case FETCH_LIST_OFFICIALLETTERS:
      return { ...state, officialLetters: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
