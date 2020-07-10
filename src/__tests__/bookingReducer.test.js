import reducer from "../redux/reducer";

describe("booking reducer", () => {
  it("should return atleast one booking initally", () => {
    const result = reducer([{ firstname: "awet" }], { action: "anything" });
    expect(result).toHaveLength(1);
  });
});
