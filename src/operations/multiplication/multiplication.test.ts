import multiplication from "./index";

describe("Return zero ", () => {
  it("should return 0", () => {
    expect(multiplication(0, 0)).toBe(0);
  });

  it("should return 0", () => {
    expect(multiplication(1, 0)).toBe(0);
  });

  it("should return 0", () => {
    expect(multiplication(0, -20) === 0).toBeTruthy();
  });
});

describe("Return positive ", () => {
  it("should return 1", () => {
    expect(multiplication(1, 1)).toBe(1);
  });

  it("should return 3", () => {
    expect(multiplication(-1, -3)).toBe(3);
  });

  it("should return 10", () => {
    expect(multiplication(2, 5)).toBe(10);
  });

  it("should return 5", () => {
    expect(multiplication(-2, -2.5)).toBe(5);
  });

  it("should return 2", () => {
    expect(multiplication(2, 1)).toBe(2);
  });
});

describe("Return negative ", () => {
  it("should return -1", () => {
    expect(multiplication(1, -1)).toBe(-1);
  });

  it("should return -10", () => {
    expect(multiplication(-2, 5)).toBe(-10);
  });

  it("should return -5", () => {
    expect(multiplication(5, -1)).toBe(-5);
  });
});
