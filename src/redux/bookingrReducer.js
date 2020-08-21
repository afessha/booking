import { BOOKING_ADD, BOOKING_MARK_SEATED, BOOKING_LOADED } from "./actions";

const INITAL_BOOKINGS = [];

function bookingReducer(state = INITAL_BOOKINGS, action) {
  switch (action.type) {
    case BOOKING_LOADED:
      return [...state, action.initalBookings];
    case BOOKING_ADD:
      return [...state, action.booking];
    case BOOKING_MARK_SEATED:
      return state.map((booking) => {
        if (booking.booking_id === action.bookingId) {
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
