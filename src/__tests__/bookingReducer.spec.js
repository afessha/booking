import reducer from "../redux/reducer";
import data from "../data/data.json";
import { BOOKING_ADD, BOOKING_MARK_SEATED } from "../redux/actions";

//Unit tests
describe("bookings reducer", () => {
  const INITAL_VALUE = data;
  it("should return all bookings initally", () => {
    const result = reducer(INITAL_VALUE, { action: "anything" });

    expect(result.bookings.length).toEqual(0);
  });
  it("should add new booking", () => {
    const newBooking = {
      firstname: "John",
      bookingId: "1594293894023",
      status: "Not arrived",
    };
    const result = reducer(INITAL_VALUE, {
      type: BOOKING_ADD,
      booking: newBooking,
    });

    expect(result.bookings).toHaveLength(1);
    expect(result.bookings[0].firstname).toEqual("John");
  });
  // it("should mark booking as seated", () => {
  //   const action = {
  //     type: BOOKING_MARK_SEATED,
  //     bookingId: "1594293894023",
  //     value: "Seated",
  //   };
  //   const result = reducer(INITAL_VALUE, action);
  //   expect(result.bookings).toEqual("Seated");
  // });
});
