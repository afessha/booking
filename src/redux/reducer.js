import { combineReducers } from "redux";
import bookingReducer from "./bookingrReducer";

const reducer = combineReducers({
  bookings: bookingReducer,
});

export default reducer;
