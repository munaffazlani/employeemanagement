import actions from "./actions";
import { message } from "antd";

const initialState = {
  userToken: null,
  user: null,
  email: null,
  authorized: false,
  profile: {},
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.LOGIN_SUCCESS:
      action.history.push("/dashboard");
      message.success("logged in");
      return {
        ...state,
        userToken: action.token,
        authorized: true,
        loading: false,
      };
    case actions.LOGIN_ERROR:
      message.error(action.payload);
      return {
        ...state,
        error: action.payload,
        authorized: false,
        loading: false, 
      };
    case actions.CHECK_AUTHORIZATION:
      return {
        ...state,
        userToken: action.token,
      };
    case actions.LOGOUT:
      action.history.push("/");
      message.success("logged out");
      return initialState;
    default:
      return state;
  }
}
