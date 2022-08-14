import { FETCH_LIST_OFFICIALLETTERS } from "../action/actionType";

const initialState = { officialLetters: [] };

function letterReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST_OFFICIALLETTERS:
      return { ...state, officialLetters: action.payload };
    default:
      return state;
  }
}

export default letterReducer;
