import { combineReducers } from "redux";
import { BOOKING_LOAD, BOOKING_ADD } from "./actions";

const INITAL_STATE = {
  bookings: [],
};
function bookingLoadReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case BOOKING_LOAD:
      return {
        ...state,
        bookings: action.bookings,
      };
    default:
      return state;
  }
}
function bookingAddReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case BOOKING_ADD:
      return {
        ...state,
        bookings: action.booking,
      };
    default:
      return state;
  }
}

const reducer = combineReducers({
  bookingLoadReducer,
  bookingAddReducer,
});
export default reducer;
