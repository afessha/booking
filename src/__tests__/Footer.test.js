import React from "react";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

const Footer = () => {
  return <div className="footer"> Awet Fessha @2020 </div>;
};
export default Footer;

describe("Footer component", () => {
  test("Matches the snapshot", () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
