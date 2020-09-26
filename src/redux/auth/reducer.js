import actions from "./actions";

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
      action.history.push("/dashboard");
      return {
        ...state,
        loading: true,
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        userToken: action.token,
        authorized: true,
        loading: false,
      };
    case actions.LOGIN_ERROR:
      return {
        ...state,
        userToken: action.token,
        authorized: false,
        loading: false,
      };
    case actions.CHECK_AUTHORIZATION:
      return {
        ...state,
        userToken: action.token,
      };
    case actions.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
