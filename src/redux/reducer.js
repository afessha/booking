import { combineReducers } from "redux";
import { BOOKING_LOAD, BOOKING_ADD } from "./actions";
import data from "../data/data";

const INITAL_BOOKINGS = { bookings: data };

function bookingReducer(state = INITAL_BOOKINGS, action) {
  switch (action.type) {
    case BOOKING_LOAD:
      return {
        ...state,
      };
    case BOOKING_ADD:
      console.log(state.bookings);
      const updatedBookings = state.bookings;
      updatedBookings.push(action.payload);
      console.log(updatedBookings);
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
