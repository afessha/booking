import { BOOKING_LOAD, BOOKING_ADD } from "./actions";
import data from "../data/data";

const INITAL_BOOKINGS = { bookings: data };

function bookingReducer(state = INITAL_BOOKINGS, action) {
  switch (action.type) {
    case BOOKING_LOAD:
      return {
        ...state,
        bookings: action.payload,
      };
    case BOOKING_ADD:
      let newArray = state.bookings.slice();
      newArray.splice(newArray.length, 0, action.payload);
      console.log(newArray);
      return {
        ...state,
        bookings: newArray,
      };

    default:
      return state;
  }
}

export default bookingReducer;
