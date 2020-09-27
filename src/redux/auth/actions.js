import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";

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
  logout: (history) => ({
    type: actions.LOGOUT,
    history,
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
    return async(dispatch) => {
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
          dispatch(actions.loginSuccess(tokens.accessToken, history));
          cognitoUser["tokens"] = tokens; // Save tokens for later use
        },
        onFailure: function (err) {
          console.log(err);
          dispatch(actions.loginError(err.message));
        },
      });
    };
  },
};
export default actions;
