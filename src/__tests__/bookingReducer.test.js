import reducer from "../redux/reducer";
import data from "../data/data.json";
import { BOOKING_ADD } from "../redux/actions";
describe("bookings reducer", () => {
  const INITAL_VALUE = data;
  it("should return all bookings initally", () => {
    const result = reducer(INITAL_VALUE, { action: "anything" });
    expect(result).toHaveLength(2);
  });
  it("should add new booking", () => {
    const newBooking = { firstname: "John" };
    const result = reducer(INITAL_VALUE, {
      type: BOOKING_ADD,
      booking: newBooking,
    });
    expect(result).toHaveLength(3);
    expect(result[2].firstname).toEqual("John");
  });
});
