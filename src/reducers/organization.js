import {
  CREATE_ORGANIZATION,
  UPDATE_ORGANIZATION,
  FETCH_ORGANIZATIONLIST,
  DELETE_ORGANIZATION,
  SET_CURRENT_ORGANIZATION,
  ORGANIZATION_ERROR,
  FETCH_ORGANIZATION
} from "../actions/types";

const INITIAL_STATE = { organizations: [], currentOrganization: {}, error: "" };

export default function (state = INITIAL_STATE, action) {
  let org;
  switch (action.type) {
    case CREATE_ORGANIZATION:
      return {
        ...state,
        organizations: [...state.organizations, action.payload.organization],
        currentOrganization: action.payload.organization,
      };
    case UPDATE_ORGANIZATION:
      org = action.payload.organization;
      for (let chl of state.organizations) {
        if (chl._id === org._id) {
          chl = org;
        }
      }
      return {
        ...state,
        organizations: state.organizations,
        currentOrganization: org,
      };
    case FETCH_ORGANIZATIONLIST:
      return { ...state, organizations: action.payload.organizations || [] };
    case DELETE_ORGANIZATION:
      org = action.payload.organization;
      for (let i = 0; i < state.organizations.length; i++) {
        if (state.organizations[i]._id === org._id) {
          state.organizations.splice(i, 1);
        }
      }
      return { ...state, organizations: state.organizations };
    case SET_CURRENT_ORGANIZATION:
      return { ...state, currentOrganization: action.organization };
    case ORGANIZATION_ERROR:
      return { ...state, error: action.payload };
    case FETCH_ORGANIZATION:
      return { ...state, currentOrganization: action.payload.organization };
    default:
      return state;
  }

  return state;
}
