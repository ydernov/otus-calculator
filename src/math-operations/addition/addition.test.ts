import addition from "./index";

describe("Return zero ", () => {
  it("should return 0", () => {
    expect(addition(0, 0)).toBe(0);
  });

  it("should return 0", () => {
    expect(addition(-1, 1)).toBe(0);
  });

  it("should return 0", () => {
    expect(addition(-20, 20)).toBe(0);
  });

  it("should return 0", () => {
    expect(addition(10, -10)).toBe(0);
  });
});

describe("Return positive ", () => {
  it("should return 1", () => {
    expect(addition(0, 1)).toBe(1);
  });

  it("should return 1", () => {
    expect(addition(1, 0)).toBe(1);
  });

  it("should return 10", () => {
    expect(addition(4, 6)).toBe(10);
  });

  it("should return 5", () => {
    expect(addition(-5, 10)).toBe(5);
  });

  it("should return 2", () => {
    expect(addition(10, -8)).toBe(2);
  });
});

describe("Return negative ", () => {
  it("should return -1", () => {
    expect(addition(0, -1)).toBe(-1);
  });

  it("should return -1", () => {
    expect(addition(-1, 0)).toBe(-1);
  });

  it("should return -10", () => {
    expect(addition(-4, -6)).toBe(-10);
  });

  it("should return -5", () => {
    expect(addition(5, -10)).toBe(-5);
  });

  it("should return -2", () => {
    expect(addition(-10, 8)).toBe(-2);
  });
});
