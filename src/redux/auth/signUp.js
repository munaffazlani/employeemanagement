import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolaData = {
  UserPoolId: "us-east-2_HeeRdd2A9",
  ClientId: "6r13ho0idugsapi4t7gue3b381",
};

const userPool = new CognitoUserPool(poolaData);

const actions = {
  CHECK_AUTHORIZATION: "CHECK_AUTHORIZATION",
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGOUT: "LOGOUT",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",

  checkAuthorization: () => {
    return { type: actions.CHECK_AUTHORIZATION };
  },
  logout: (history) => ({
    type: actions.LOGOUT,
    history,
  }),
  loginRequest: (history) => ({
    type: actions.LOGIN_REQUEST,
    history,
  }),
  loginSuccess: (payload) => ({
    type: actions.LOGIN_SUCCESS,
    payload,
  }),
  loginError: (payload) => ({
    type: actions.LOGIN_ERROR,
    payload,
  }),
  login: (payload, history) => {
    return (dispatch) => {
      dispatch(actions.loginRequest(history));
      const { email, password } = payload;
      userPool.signUp(email, password, [], null, (err, data) => {
        if (err) {
          console.log(err);
          dispatch(actions.loginError(err));
        }
        console.log(data);
        dispatch(actions.loginSuccess(data));
      });
    };
  },
};
export default actions;
