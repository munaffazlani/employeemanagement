import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk"

// const middlewares = [thunkMiddlware];

// const bindMiddleware = (middleware) => {
//     const { composeWithDevTools } = require("redux-devtools-extension");
//     return composeWithDevTools(applyMiddleware(...middleware));
// };

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store
