import { BOOKING_LOAD, BOOKING_ADD } from "./actions";
import data from "../data/data";

const INITAL_BOOKINGS = data;

function bookingReducer(state = INITAL_BOOKINGS, action) {
  switch (action.type) {
    case BOOKING_ADD:
      return [...state, action.booking];
    case BOOKING_LOAD:
    default:
      return state;
  }
}

export default bookingReducer;
