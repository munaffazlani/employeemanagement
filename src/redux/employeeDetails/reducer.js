import actions from "./actions";

const initialState = {
  loading: false,
  employeeLoginDetails: [],
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_EMPLOYEE_DETAILS:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_EMPLOYEE_DETAILS_SUCCESS:
      return {
        ...state,
        employeeLoginDetails: action.payload,
        loading: false,
      };
    case actions.GET_EMPLOYEE_DETAILS_FAILED:
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
