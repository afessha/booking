import React from "react";
import { create } from "react-test-renderer";
import Booking from "../components/booking/Booking";
import { Provider } from "react-redux";
import store from "../redux/store";

describe("Booking component", () => {
  test("Matches the snapshot", () => {
    const booking = create(
      <Provider store={store}>
        <Booking />
      </Provider>
    );
    expect(booking.toJSON()).toMatchSnapshot();
  });
});
