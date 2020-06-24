import React from "react";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";
import Booking from "../components/booking/Booking";
import Seating from "../components/seating/Seating";
import { BrowserRouter, Route } from "react-router-dom";
import App from "../App";

describe("App component", () => {
  test("Matches the snapshot", () => {
    const app = create(<App />);
    expect(app.toJSON()).toMatchSnapshot();
  });
});
