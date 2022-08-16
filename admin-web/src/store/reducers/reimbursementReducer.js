import {
  FETCH_LIST_REIMBURSEMENT,
  GET_PDF_REIMBURSEMENTS,
} from "../action/actionType";

const initialState = { reimbursements: [], getPdf: [] };

function reimbursementReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST_REIMBURSEMENT:
      return { ...state, reimbursements: action.payload };
    case GET_PDF_REIMBURSEMENTS:
      return { ...state, getPdf: action.payload };
    default:
      return state;
  }
}

export default reimbursementReducer;
