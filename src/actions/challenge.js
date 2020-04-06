import { getData, postData, putData, deleteData } from "./index";
import {
  CREATE_CHALLENGE,
  CHALLENGE_ERROR,
  UPDATE_CHALLENGE,
  FETCH_CHALLENGE,
  FETCH_CHALLENGELIST,
  DELETE_CHALLENGE,
  SET_CURRENT_CHALLENGE
} from "./types";

//= ===============================
// Challenge actions
//= ===============================

export function createChallenge(chlData) {
  const url = "/challenge";
  return (dispatch) =>
    postData(CREATE_CHALLENGE, CHALLENGE_ERROR, false, url, dispatch, chlData);
}

export function updateChallenge(chlData) {
  const url = "/challenge";
  return (dispatch) =>
    putData(UPDATE_CHALLENGE, CHALLENGE_ERROR, false, url, dispatch, chlData);
}

export function getChallenge(chl_id) {
  const url = `/challenge/${chl_id}`;
  return (dispatch) =>
    getData(FETCH_CHALLENGE, CHALLENGE_ERROR, false, url, dispatch);
}

export function listChallenge(org_id) {
  const url = `/challenge/list/${org_id}`;
  return (dispatch) =>
    getData(FETCH_CHALLENGELIST, CHALLENGE_ERROR, false, url, dispatch);
}

export function deleteChallenge(chl_id) {
  const url = `/challenge/${chl_id}`;
  return (dispatch) =>
    deleteData(DELETE_CHALLENGE, CHALLENGE_ERROR, false, url, dispatch);
}

export function setCurrentChallenge(chl) {
  return (dispatch) => {
    dispatch({ type: SET_CURRENT_CHALLENGE, challenge: chl });
  };
}
