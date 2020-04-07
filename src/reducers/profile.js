import {
  FETCH_LANGUAGE_LIST,
  FETCH_SKILL_LIST,
  FETCH_INTEREST_LIST,
  LANGUAGE_ERROR,
  INTEREST_ERROR,
  SKILL_ERROR,
} from "../actions/types";

const INITIAL_STATE = {
  languageList: [],
  skillList: [],
  interestList: [],
  error: "",
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_LANGUAGE_LIST:
      return { ...state, languageList: action.payload.language };
    case FETCH_SKILL_LIST:
      return { ...state, skillList: action.payload.skill };
    case FETCH_INTEREST_LIST:
      return { ...state, interestList: action.payload.interest };
    case LANGUAGE_ERROR:
      return { ...state, error: action.payload };
    case SKILL_ERROR:
      return { ...state, error: action.payload };
    case INTEREST_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
