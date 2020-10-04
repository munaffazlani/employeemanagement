import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";
import { message } from "antd";
import Parse from 'parse'
// Parse Config
Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
Parse.initialize(
  "BupudqLoT9zk0gVByWkpqvJnDaWbjRL1s135gJ2H", // This is your Application ID
  "yCVDrudkwESQowwdPT62fZ2HjMkftC84XsRWgbMv" // This is your Javascript key
);
var user = new Parse.User();
user.set("username", "my name");
user.set("password", "my pass");
user.set("email", "email@example.com");

// // other fields can be set just like with Parse.Object
// user
//   .signUp()
//   .then((user) => {
//     if (typeof document !== "undefined")
//       document.write(`User signed up: ${JSON.stringify(user)}`);
//     console.log("User signed up", user);
//   })
//   .catch((error) => {
//     if (typeof document !== "undefined")
//       document.write(`Error while signing up user: ${JSON.stringify(error)}`);
//     console.error("Error while signing up user", error);
//   });

// Parse End

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
