import React from "react";
import Seating from "../components/seating/Seating";
import { render } from "../testUtils/helper";

describe("Seating component", () => {
  test("Matches the snapshot", () => {
    const seating = render(<Seating />);
    expect(seating).toMatchSnapshot();
  });
});
