import React from "react";
import { render } from "../testUtils/helper";
import Seating from "../components/seating/Seating";
import data from "../data/data.json";

//Unit tests
describe("Seating component", () => {
  it("Renders all the bookings in seating page", () => {
    const result = render(<Seating />, {
      initialState: {
        bookings: [
          {
            id: "1234567",
            firstname: "Awet",
          },
          {
            id: "1454567",
            firstname: "Mozafar",
          },
        ],
      },
    });

    expect(result.getByText(/Awet/i)).toBeInTheDocument();
    expect(result.getByText(/Mozafar/i)).toBeInTheDocument();
    expect(result.getByText(/Ahmed/i)).not.toBeInTheDocument();
  });
});
