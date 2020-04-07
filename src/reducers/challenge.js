import {
  CREATE_CHALLENGE,
  UPDATE_CHALLENGE,
  FETCH_CHALLENGELIST,
  DELETE_CHALLENGE,
  SET_CURRENT_CHALLENGE,
  CHALLENGE_ERROR,
} from "../actions/types";

const INITIAL_STATE = { challenges: [], currentChallenge: {} };

export default function (state = INITIAL_STATE, action) {
  let challenge;
  switch (action.type) {
    case CREATE_CHALLENGE:
      return {
        ...state,
        challenges: [...state.challenges, action.payload.challenge],
        currentChallenge: action.payload.challenge,
      };
    case UPDATE_CHALLENGE:
      challenge = action.payload.challenge;
      let chls = state.challenges
      for (let i=0; i < chls.length; i++) {
        if (chls[i]._id === challenge._id) {
          chls[i] = challenge;
        }
      }
      return {
        ...state,
        challenges: chls,
        currentChallenge: challenge,
      };
    case FETCH_CHALLENGELIST:
      return { ...state, challenges: action.payload.challenges || [] };
    case DELETE_CHALLENGE:
      challenge = action.payload.challenge;
      for (let i = 0; i < state.challenges.length; i++) {
        if (state.challenges[i]._id === challenge._id) {
          state.challenges.splice(i, 1);
        }
      }
      return { ...state, challenges: state.challenges };
    case SET_CURRENT_CHALLENGE:
      return { ...state, currentChallenge: action.challenge };
    case CHALLENGE_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
