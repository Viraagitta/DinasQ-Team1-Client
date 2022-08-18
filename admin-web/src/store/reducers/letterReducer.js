import {
  FETCH_LIST_OFFICIALLETTERS,
  FETCH_LIST_REIMBURSEMENT_BY_OFFICIALLETTERID,
  UPDATE_STATUS_LETTER,
} from "../action/actionType";

const initialState = {
  officialLetters: {
    rows: [],
    totalPages: 1,
  },
  reimbursementByOfficalLetterId: {},
};

function letterReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST_OFFICIALLETTERS:
      return { ...state, officialLetters: action.payload };
    case FETCH_LIST_REIMBURSEMENT_BY_OFFICIALLETTERID:
      return { ...state, reimbursementByOfficalLetterId: action.payload };
    case UPDATE_STATUS_LETTER:
      return { ...state, officialLetters: action.payload };
    default:
      return state;
  }
}

export default letterReducer;
