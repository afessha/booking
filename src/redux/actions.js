//action types
export const BOOKING_LOAD = "BOOKING_LOAD";
export const BOOKING_ADD = "BOOKING_ADD";
export const BOOKING_MARK_SEATED = "BOOKING_MARK_SEATED";

//action creator
export function bookingLoad(bookings) {
  return { type: BOOKING_LOAD, bookings };
}

export function bookingAdd(booking) {
  return { type: BOOKING_ADD, booking };
}

export function markSeated(bookingId, value) {
  return { type: BOOKING_MARK_SEATED, bookingId, value };
}
