import React from "react";
import { create } from "react-test-renderer";
import { BrowserRouter, Route } from "react-router-dom";
import App from "../App";

describe("App component", () => {
  test("Matches the snapshot", () => {
    const app = create(<App />);
    expect(app).toMatchSnapshot();
  });
});
