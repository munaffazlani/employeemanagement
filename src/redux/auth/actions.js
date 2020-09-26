const actions = {
  CHECK_AUTHORIZATION: "CHECK_AUTHORIZATION",
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGOUT: "LOGOUT",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  
  checkAuthorization: () => {
    return { type: actions.CHECK_AUTHORIZATION };
  },
  login: (payload, history) => ({
    type: actions.LOGIN_REQUEST,
    payload: payload,
    history: history,
  }),
  logout: (history) => ({
    type: actions.LOGOUT,
    history,
  }),
};
export default actions;
