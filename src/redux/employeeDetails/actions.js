const actions = {
  GET_EMPLOYEE_DETAILS: "GET_EMPLOYEE_DETAILS",
  GET_EMPLOYEE_DETAILS_SUCCESS: "GET_EMPLOYEE_SUCCESS",
  GET_EMPLOYEE_DETAILS_FAILED: "GET_EMPLOYEE_FAILED",

  getEmployeeDetails: () => ({
    type: actions.GET_EMPLOYEE_DETAILS,
  }),
  getEmployeeDetailsSuccess: () => ({
    type: actions.GET_EMPLOYEE_DETAILS,
  }),
  getEmployeeDetailsFailed: () => ({
    type: actions.GET_EMPLOYEE_DETAILS,
  }),
};
export default actions;
