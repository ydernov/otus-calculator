import invert from "./index";

describe("Should return matching negative", () => {
  test("0 to be -0", () => {
    expect(invert("0")).toBe("-0");
  });

  test("1 to be -1", () => {
    expect(invert("1")).toBe("-1");
  });

  test("345 to be -345", () => {
    expect(invert("345")).toBe("-345");
  });
});

describe("Should return matching positive", () => {
  test("-0 to be 0", () => {
    expect(invert("-0")).toBe("0");
  });

  test("-1 to be 1", () => {
    expect(invert("-1")).toBe("1");
  });

  test("-345 to be 345", () => {
    expect(invert("-345")).toBe("345");
  });
});
