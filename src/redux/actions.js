//action types
export const BOOKING_ADD = "BOOKING_ADD";
export const BOOKING_LOADED = "BOOKING_LOADED";
export const BOOKING_MARK_SEATED = "BOOKING_MARK_SEATED";

export function loadBookings() {
  return function (dispatch) {
    return fetch(
      "https://9hgho8x1kg.execute-api.us-east-2.amazonaws.com/default/restaurant-booking"
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(initaliseBookings(data));
      });
  };
}
//action creator
function initaliseBookings(initalBookings) {
  return { type: BOOKING_LOADED, initalBookings };
}

export function bookingAdd(booking) {
  return { type: BOOKING_ADD, booking };
}

export function markSeated(bookingId, value) {
  return { type: BOOKING_MARK_SEATED, bookingId, value };
}
