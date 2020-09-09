import React from "react";
import { render } from "../testUtils/helper";
import Booking from "../components/booking/Booking";

describe("Booking component", () => {
  test("Matches the snapshot", () => {
    const booking = render(<Booking />);
    expect(booking).toMatchSnapshot();
  });
});
