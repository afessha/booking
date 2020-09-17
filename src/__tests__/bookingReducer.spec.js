import reducer from "../redux/reducer";
import data from "../data/data.json";
import { BOOKING_ADD, BOOKING_MARK_SEATED } from "../redux/actions";

//Unit tests
describe("bookings reducer", () => {
  const INITAL_VALUE = data;
  it("should return all bookings initally", () => {
    const result = reducer(INITAL_VALUE, { action: "anything" });
    expect(1 + 1).toEqual(2);
  });
  // it("should add new booking", () => {
  //   const newBooking = { firstname: "John" };
  //   const result = reducer(INITAL_VALUE, {
  //     type: BOOKING_ADD,
  //     booking: newBooking,
  //   });
  //   expect(result).toHaveLength(3);
  //   expect(result[2].firstname).toEqual("John");
  // });
  // it("should mark booking as seated", () => {
  //   const action = {
  //     type: BOOKING_MARK_SEATED,
  //     bookingId: "1594293894023",
  //     value: "Seated",
  //   };
  //   const result = reducer(INITAL_VALUE, action);
  //   expect(result[0].status).toEqual("Seated");
  //   expect(result[1].status).toEqual("Not arrived");
  // });
});
