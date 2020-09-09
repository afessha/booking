import React from "react";
import { render } from "../testUtils/helper";
import App from "../App";

describe("App component", () => {
  test("Matches the snapshot", () => {
    const app = render(<App />);
    expect(app.toJSON()).toMatchSnapshot();
  });
});
