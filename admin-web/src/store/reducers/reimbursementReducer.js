import { FETCH_LIST_REIMBURSEMENT } from "../action/actionType";

const initialState = { reimbursements: [] };

function reimbursementReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST_REIMBURSEMENT:
      return { ...state, reimbursements: action.payload };
    default:
      return state;
  }
}

export default reimbursementReducer;
