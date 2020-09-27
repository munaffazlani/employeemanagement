import Axios from "axios";
const proxy = "https://cors-anywhere.herokuapp.com/";
const url =
  "https://hgreqzovxl.execute-api.us-east-2.amazonaws.com/development/getitem";
const actions = {
  GET_EMPLOYEE_DETAILS: "GET_EMPLOYEE_DETAILS",
  GET_EMPLOYEE_DETAILS_SUCCESS: "GET_EMPLOYEE_SUCCESS",
  GET_EMPLOYEE_DETAILS_FAILED: "GET_EMPLOYEE_FAILED",

  getEmployeeDetails: () => ({
    type: actions.GET_EMPLOYEE_DETAILS,
  }),
  getEmployeeDetailsSuccess: (payload) => ({
    type: actions.GET_EMPLOYEE_DETAILS_SUCCESS,
    payload,
  }),
  getEmployeeDetailsFailed: (payload) => ({
    type: actions.GET_EMPLOYEE_DETAILS_FAILED,
    payload,
  }),
  fetchingEmployeData: () => {
    return async (dispatch) => {
      //Dispatch the fetchData action creator before retrieving to set our loading state to true.
      dispatch(actions.getEmployeeDetails());
      //Then get the data.
      await Axios.get(proxy + url)
        .then((res) => {
          console.log(res);
          dispatch(actions.getEmployeeDetailsSuccess(res.data.Items));
          //Error handle the promise and set your errorMessage
        })
        .catch((err) => dispatch(actions.getEmployeeDetailsFailed(err)));
    };
  },
};
export default actions;
