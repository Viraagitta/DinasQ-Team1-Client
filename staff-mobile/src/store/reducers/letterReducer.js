import {
  CREATE_OFFICIAL_LETTERS,
  FETCH_OFFICIAL_LETTERS_BY_USERID,
} from "../action/actionType";

const initialState = {
  officialLetters: [],
  reimbursement: [],
};

function letterReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_OFFICIAL_LETTERS:
      return { ...state, officialLetters: action.payload };
    case FETCH_OFFICIAL_LETTERS_BY_USERID:
      return { ...state, officialLetters: action.payload };
    // case REIMBURSEMENT_BY_USERID:
    //   return { ...state, officialLetters: action.payload };
    default:
      return state;
  }
}

export default letterReducer;
