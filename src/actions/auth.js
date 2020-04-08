import axios from "axios";
import cookie from "react-cookies";
import { API_URL, errorHandler } from "./index";
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  RESET_PASSWORD_REQUEST,
  PROTECTED_TEST,
} from "./types";
import history from "../history";

//= ===============================
// Authentication actions
//= ===============================

// TO-DO: Add expiration to cookie
export function loginUser({ email, password }) {
  return function (dispatch) {
    axios
      .post(`${API_URL}/auth/login`, { email, password })
      .then((response) => {
        cookie.save("token", response.data.token, { path: "/" });
        cookie.save("user", response.data.user, { path: "/" });
        dispatch({ type: AUTH_USER });
        history.push("/dashboard");
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, AUTH_ERROR);
      });
  };
}

export function registerUser({ email, first_name, last_name, password, conf_password }) {
  return function (dispatch) {
    if (password !== conf_password) {
      errorHandler(dispatch, "password doesn't match", AUTH_ERROR);
      return;
    }
    axios
      .post(`${API_URL}/auth/register`, { email, first_name, last_name, password })
      .then((response) => {
        cookie.save("token", response.data.token, { path: "/" });
        cookie.save("user", response.data.user, { path: "/" });
        dispatch({ type: AUTH_USER });
        history.push("/dashboard");
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, AUTH_ERROR);
      });
  };
}

export function logoutUser(error) {
  return function (dispatch) {
    dispatch({ type: UNAUTH_USER, payload: error || "" });
    cookie.remove("token", { path: "/" });
    cookie.remove("user", { path: "/" });

    history.push(`/login`);
  };
}

export function getForgotPasswordToken({ email }) {
  return function (dispatch) {
    // axios.post(`${API_URL}/auth/forgot-password`, { email })
    // .then((response) => {
    //   dispatch({
    //     type: FORGOT_PASSWORD_REQUEST,
    //     payload: response.data.message,
    //   });
    // })
    // .catch((error) => {
    //   errorHandler(dispatch, error.response, AUTH_ERROR);
    // });
    errorHandler(dispatch, "Not implemented yet", AUTH_ERROR);
  };
}

export function resetPassword(token, { password }) {
  return function (dispatch) {
    axios
      .post(`${API_URL}/auth/reset-password/${token}`, { password })
      .then((response) => {
        dispatch({
          type: RESET_PASSWORD_REQUEST,
          payload: response.data.message,
        });
        // Redirect to login page on successful password reset
        history.push("/login");
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, AUTH_ERROR);
      });
  };
}

export function protectedTest() {
  return function (dispatch) {
    axios
      .get(`${API_URL}/protected`, {
        headers: { Authorization: cookie.load("token") },
      })
      .then((response) => {
        dispatch({
          type: PROTECTED_TEST,
          payload: response.data.content,
        });
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, AUTH_ERROR);
      });
  };
}
