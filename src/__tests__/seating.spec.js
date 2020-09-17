import React from "react";
import { render } from "../testUtils/helper";
import Seating from "../components/seating/Seating";

//Unit tests
describe("Seating component", () => {
  it("Renders all the bookings in seating page", () => {
    const result = render(<Seating />);

    expect(result.getAllByText(/Awet/i)).toBeDefined();
  });
});
