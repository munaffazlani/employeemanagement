import actions from "./actions";
import { message } from "antd";

const initialState = {
  loading: false,
  employeeDetails: [],
};

export default function employeeDetailsRedu(state = initialState, action) {
  switch (action.type) {
    case actions.GET_EMPLOYEE_DETAILS:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_EMPLOYEE_DETAILS_SUCCESS:
      return {
        ...state,
        employeeDetails: action.payload,
        loading: false,
      };
    case actions.GET_EMPLOYEE_DETAILS_FAILED:
      message.error(action.payload.message)
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
      };

    case actions.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
