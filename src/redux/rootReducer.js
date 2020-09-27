import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import employeeDetails from "./employeeDetails/reducer"

export default combineReducers({ authReducer, employeeDetails });
