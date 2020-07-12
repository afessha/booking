import React from "react";
import { render } from "../testUtils/helper";
import Seating from "../components/seating/Seating";
import data from "../data/data.json";

//Unit tests
describe("Seating component", () => {
  it("Renders all the bookings in seating page", () => {
    const result = render(<Seating />, { bookings: data });

    expect(result.getAllByText(/Awet/i)).toBeDefined();
    expect(result.getAllByText(/Mozafar/i)).toBeDefined();
  });
});
