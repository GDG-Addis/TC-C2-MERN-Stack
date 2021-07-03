import { UserActionTypes } from "./types";
import axios from "axios";

export const loginStart = () => ({
  type: UserActionTypes.LOGIN_START,
});

export const loginSuccess = (user, token) => ({
  type: UserActionTypes.LOGIN_SUCCESS,
  payload: {
    token,
    user,
  },
});

export const loginError = (error) => ({
  type: UserActionTypes.LOGIN_ERROR,
  payload: {
    error,
  },
});

/**
 * Asyn Action creator
 */

export const loginAsync = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(loginStart());
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/login`,
        {
          email,
          password,
        }
      );
      dispatch(loginSuccess(response.data.user, response.data.token));
    } catch (err) {
      dispatch(loginError(err));
    }
  };
};
