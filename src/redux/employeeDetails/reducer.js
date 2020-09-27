import actions from "./actions";

const initialState = {
  loading: false,
  employeeDetails: [],
};

export default function employeeDetailsReducer(state = initialState, action) {
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
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
