import { CREATE_OFFICIAL_LETTERS } from "../action/actionType";

const initialState = {
  officialLetters: [],
};

function letterReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_OFFICIAL_LETTERS:
      return { ...state, officialLetters: action.payload };
    default:
      return state;
  }
}

export default letterReducer;
