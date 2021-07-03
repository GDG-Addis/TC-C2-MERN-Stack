import { UserActionTypes } from "./types";
import Cookies from "js-cookie";

const authCookies = Cookies.get("AUTH") || JSON.stringify({});
const INITIAL_STATE = {
  loginLoading: false,
  user: null,
  token: null,
  loginError: null,
  ...JSON.parse(authCookies),
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.LOGIN_START:
      return {
        ...state,
        loginError: null,
        loginLoading: true,
      };
    case UserActionTypes.LOGIN_SUCCESS:
      Cookies.set(
        "AUTH",
        JSON.stringify({
          user: action.payload.user,
          token: action.payload.token,
        })
      );
      return {
        ...state,
        loginLoading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case UserActionTypes.LOGIN_ERROR:
      return {
        ...state,
        loginLoading: false,
        loginError: action.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
