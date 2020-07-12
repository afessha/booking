import { BOOKING_ADD, BOOKING_MARK_SEATED } from "./actions";
import data from "../data/data";

const INITAL_BOOKINGS = data;

function bookingReducer(state = INITAL_BOOKINGS, action) {
  switch (action.type) {
    case BOOKING_ADD:
      return [...state, action.booking];
    case BOOKING_MARK_SEATED:
      return state.map((booking) => {
        if (booking.id === action.bookingId) {
          return {
            ...booking,
            status: action.value,
          };
        } else return booking;
      });
    default:
      return state;
  }
}

export default bookingReducer;
