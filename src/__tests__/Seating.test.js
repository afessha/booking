import React from "react";
import { create } from "react-test-renderer";
import Seating from "../components/seating/Seating";


describe("Seating component", () => {
  test("Matches the snapshot", () => {
    const seating = create(<Seating />);
    expect(seating.toJSON()).toMatchSnapshot();
  });
});
