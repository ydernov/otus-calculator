import factorial from "./index";

describe("Return one ", () => {
  it("should return 1", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 1", () => {
    expect(factorial(1)).toBe(1);
  });
});

describe("Return values ", () => {
  it("should return 120", () => {
    expect(factorial(5)).toBe(120);
  });

  it("should return 5040", () => {
    expect(factorial(7)).toBe(5040);
  });

  it("should return 3628800", () => {
    expect(factorial(10)).toBe(3628800);
  });
});

describe("Throw cases ", () => {
  it("should throw Only positive integers are allowed!", () => {
    expect(() => factorial(Infinity)).toThrow(
      "Only positive integers are allowed!"
    );
  });

  it("should throw Only positive integers are allowed!", () => {
    expect(() => factorial(-10)).toThrow("Only positive integers are allowed!");
  });

  it("should throw Only positive integers are allowed!", () => {
    expect(() => factorial(5.3)).toThrow("Only positive integers are allowed!");
  });
});
