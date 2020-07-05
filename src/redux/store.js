import { createStore } from "redux";
import bookingReducer from "./reducer";

const store = createStore(
  bookingReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
