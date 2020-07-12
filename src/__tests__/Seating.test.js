import React from "react";
import { create } from "react-test-renderer";
import Seating from "../components/seating/Seating";
import { Provider } from "react-redux";
import store from "../redux/store";

describe("Seating component", () => {
  test("Matches the snapshot", () => {
    const seating = create(
      <Provider store={store}>
        <Seating />
      </Provider>
    );
    expect(seating.toJSON()).toMatchSnapshot();
  });
});
