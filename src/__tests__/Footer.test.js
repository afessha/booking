import React from "react";
import Footer from "../components/footer/Footer";
import { create } from "react-test-renderer";

describe("Footer component", () => {
  test("Matches the snapshot", () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
