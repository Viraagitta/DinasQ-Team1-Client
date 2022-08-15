import {
  CREATE_REIMBURSEMENT,
  FETCH_REIMBURSEMENTS_BY_LETTERID,
} from "../action/actionType";

const initialState = { reimbursements: [] };

function reimbursementReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REIMBURSEMENTS_BY_LETTERID:
      return { ...state, reimbursements: action.payload };
    case CREATE_REIMBURSEMENT:
      return { ...state, reimbursements: action.payload };
    default:
      return state;
  }
}

export default reimbursementReducer;
