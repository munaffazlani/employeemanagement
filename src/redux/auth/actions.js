import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";
import { message } from "antd";
const poolData = {
  UserPoolId: "us-east-2_HeeRdd2A9",
  ClientId: "6r13ho0idugsapi4t7gue3b381",
};
const userPool = new CognitoUserPool(poolData);

const actions = {
  CHECK_AUTHORIZATION: "CHECK_AUTHORIZATION",
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGOUT: "LOGOUT",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",

  checkAuthorization: () => {
    return { type: actions.CHECK_AUTHORIZATION };
  },
  logout: () => ({
    type: actions.LOGOUT,
  }),
  loginRequest: (history) => ({
    type: actions.LOGIN_REQUEST,
    history,
  }),
  loginSuccess: (token, history) => ({
    type: actions.LOGIN_SUCCESS,
    token,
    history,
  }),
  loginError: (payload) => ({
    type: actions.LOGIN_ERROR,
    payload,
  }),
  login: (payload, history) => {
    return async (dispatch) => {
      dispatch(actions.loginRequest(history));
      const { email, password } = payload;
      var authenticationData = {
        Username: email,
        Password: password,
      };
      const authenticationDetails = new AuthenticationDetails(
        authenticationData
      );
      const userData = {
        Username: email,
        Pool: userPool,
      };
      const cognitoUser = new CognitoUser(userData);

      await cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (session) {
          const tokens = {
            accessToken: session.getAccessToken().getJwtToken(),
            idToken: session.getIdToken().getJwtToken(),
            refreshToken: session.getRefreshToken().getToken(),
          };
          console.log(tokens);
          message.success("logged in");
          dispatch(actions.loginSuccess(tokens.accessToken));
          cognitoUser["tokens"] = tokens; // Save tokens for later use
          history.push("/dashboard");
        },
        onFailure: function (err) {
          console.log(err);
          message.error(err.message);
          dispatch(actions.loginError(err.message));
        },
      });
    };
  },
  loggingOut: (history) => {
    return (dispatch) => {
      dispatch(actions.logout());
      history.push("/");
      message.success("logged out");
    };
  },
};
export default actions;
