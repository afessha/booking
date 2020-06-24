import React from "react";
import { create } from "react-test-renderer";
import Booking from "../components/booking/Booking";

describe("Booking component", () => {
  test("Matches the snapshot", () => {
    const booking = create(<Booking />);
    expect(booking.toJSON()).toMatchSnapshot();
  });
});
