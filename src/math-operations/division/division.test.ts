import division from "./index";

describe("Throw divide by zero ", () => {
  it("should throw", () => {
    expect(() => division(1, 0)).toThrow("Can't divide by zero!");
  });

  it("should throw", () => {
    expect(() => division(100, 0)).toThrow("Can't divide by zero!");
  });

  it("should throw", () => {
    expect(() => division(-100, 0)).toThrow("Can't divide by zero!");
  });

  it("should throw", () => {
    expect(() => division(-100, -0)).toThrow("Can't divide by zero!");
  });
});

describe("Return zero ", () => {
  it("should return 0", () => {
    expect(division(0, 4)).toBe(0);
  });

  it("should return 0", () => {
    expect(division(0, -20) === 0).toBeTruthy();
  });
});

describe("Return positive ", () => {
  it("should return 1", () => {
    expect(division(1, 1)).toBe(1);
  });

  it("should return 3", () => {
    expect(division(-3, -1)).toBe(3);
  });

  it("should return 10", () => {
    expect(division(20, 2)).toBe(10);
  });

  it("should return 3", () => {
    expect(division(-9, -3)).toBe(3);
  });

  it("should return 0.5", () => {
    expect(division(5, 10)).toBe(0.5);
  });
});

describe("Return negative ", () => {
  it("should return -1", () => {
    expect(division(1, -1)).toBe(-1);
  });

  it("should return -10", () => {
    expect(division(-20, 2)).toBe(-10);
  });

  it("should return -5", () => {
    expect(division(5, -1)).toBe(-5);
  });
});
