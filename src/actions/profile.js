import { getData } from "./index";
import {
  FETCH_LANGUAGE_LIST,
  FETCH_SKILL_LIST,
  FETCH_INTEREST_LIST,
  LANGUAGE_ERROR,
  INTEREST_ERROR,
  SKILL_ERROR,
} from "./types";

export function listLanguage() {
  const url = "/language";
  return (dispatch) =>
    getData(FETCH_LANGUAGE_LIST, LANGUAGE_ERROR, false, url, dispatch);
}

export function listSkill() {
  const url = "/skill";
  return (dispatch) =>
    getData(FETCH_SKILL_LIST, SKILL_ERROR, false, url, dispatch);
}

export function listInterest() {
  const url = "/interest";
  return (dispatch) =>
    getData(FETCH_INTEREST_LIST, INTEREST_ERROR, false, url, dispatch);
}
