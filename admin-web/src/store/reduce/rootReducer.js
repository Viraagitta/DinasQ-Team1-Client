import {
  FETCH_LIST_EMPLOYEES,
  FETCH_LIST_REIMBURSEMENT,
} from "../action/actionType";

const initialState = { employees: [], reimbursements: [] };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST_EMPLOYEES:
      return { ...state, employees: action.payload };
    case FETCH_LIST_REIMBURSEMENT:
      return { ...state, reimbursements: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
