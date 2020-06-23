import React from "react";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";
import Booking from "../components/booking/Booking";
import Seating from "../components/seating/Seating";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/booking">
      <Route exact={true} path="/" component={Booking} />
      <Route path="/booking-list" component={Seating} />
    </BrowserRouter>
  );
}

export default App;

describe("Footer component", () => {
  test("Matches the snapshot", () => {
    const app = create(<App />);
    expect(app.toJSON()).toMatchSnapshot();
  });
});
