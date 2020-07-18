import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import bookingReducer from "./reducer";

const initialState = [];
const middleware = [thunk];

const store = createStore(
  bookingReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
