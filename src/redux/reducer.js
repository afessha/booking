import { combineReducers } from "redux";
import { BOOKING_LOAD, BOOKING_ADD } from "./actions";
import data from "../data/data";

const INITAL_STATE = {
  bookings: data,
};
function bookingReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case BOOKING_LOAD:
      return {
        ...state,
      };
    case BOOKING_ADD:
      let updatedBookings = state.bookings.push(action.payload);
      return {
        ...state,
        bookings: updatedBookings,
      };
    default:
      return state;
  }
}

const reducer = combineReducers({
  bookings: bookingReducer,
});
export default reducer;
