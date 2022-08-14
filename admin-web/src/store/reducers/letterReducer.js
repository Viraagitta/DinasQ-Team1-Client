import {
  FETCH_LIST_OFFICIALLETTERS,
  FETCH_LIST_REIMBURSEMENT_BY_OFFICIALLETTERID,
} from "../action/actionType";

const initialState = {
  officialLetters: [],
  reimbursementByOfficalLetterId: {},
};

function letterReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST_OFFICIALLETTERS:
      return { ...state, officialLetters: action.payload };
    case FETCH_LIST_REIMBURSEMENT_BY_OFFICIALLETTERID:
      return { ...state, reimbursementByOfficalLetterId: action.payload };
    default:
      return state;
  }
}

export default letterReducer;
