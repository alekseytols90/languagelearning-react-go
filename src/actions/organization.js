import { getData, putData, deleteData, errorHandler, API_URL } from "./index";
import axios from "axios";
import {
  CREATE_ORGANIZATION,
  ORGANIZATION_ERROR,
  UPDATE_ORGANIZATION,
  FETCH_ORGANIZATION,
  FETCH_ORGANIZATIONLIST,
  DELETE_ORGANIZATION,
  SET_CURRENT_ORGANIZATION
} from "./types";
import history from "../history";

//= ===============================
// Organization actions
//= ===============================

export function createOrganization(orgData) {
  const url = "/organization";
  return (dispatch) => {
    axios
    .post(API_URL + url, orgData)
    .then((response) => {
      dispatch({
        type: CREATE_ORGANIZATION,
        payload: response.data,
      });
      history.push(`/organization/${response.data.organization._id}`);
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, ORGANIZATION_ERROR);
    });
  }
}

export function updateOrganization(orgData) {
  const url = "/organization";
  return (dispatch) =>
    putData(
      UPDATE_ORGANIZATION,
      ORGANIZATION_ERROR,
      false,
      url,
      dispatch,
      orgData
    );
}

export function getOrganization(org_id) {
  const url = `/organization/${org_id}`;
  return (dispatch) =>
    getData(FETCH_ORGANIZATION, ORGANIZATION_ERROR, false, url, dispatch);
}

export function listOrganization() {
  const url = "/organization";
  return (dispatch) =>
    getData(FETCH_ORGANIZATIONLIST, ORGANIZATION_ERROR, false, url, dispatch);
}

export function deleteOrganization(org_id) {
  const url = `/organization/${org_id}`;
  return (dispatch) =>
    deleteData(DELETE_ORGANIZATION, ORGANIZATION_ERROR, false, url, dispatch);
}

export function setCurrentOrganization(org) {
  return (dispatch) => {
    dispatch({type: SET_CURRENT_ORGANIZATION, organization: org})
  }
}