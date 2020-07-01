//action types
export const BOOKING_LOAD = "BOOKING_LOAD";
export const BOOKING_ADD = "BOOKING_ADD";

//action creator
export function bookingLoad(bookings) {
  return { type: BOOKING_LOAD, payload: bookings };
}

export function bookingAdd(booking) {
  return { type: BOOKING_ADD, payload: booking };
}
