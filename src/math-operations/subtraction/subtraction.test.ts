import ubtraction from "./index";

describe("Return zero ", () => {
  it("should return 0", () => {
    expect(ubtraction(0, 0)).toBe(0);
  });

  it("should return 0", () => {
    expect(ubtraction(1, 1)).toBe(0);
  });

  it("should return 0", () => {
    expect(ubtraction(-20, -20)).toBe(0);
  });
});

describe("Return positive ", () => {
  it("should return 1", () => {
    expect(ubtraction(0, -1)).toBe(1);
  });

  it("should return 3", () => {
    expect(ubtraction(1, -2)).toBe(3);
  });

  it("should return 10", () => {
    expect(ubtraction(4, -6)).toBe(10);
  });

  it("should return 5", () => {
    expect(ubtraction(-5, -10)).toBe(5);
  });

  it("should return 2", () => {
    expect(ubtraction(10, 8)).toBe(2);
  });
});

describe("Return negative ", () => {
  it("should return -1", () => {
    expect(ubtraction(0, 1)).toBe(-1);
  });

  it("should return -1", () => {
    expect(ubtraction(-1, 0)).toBe(-1);
  });

  it("should return -10", () => {
    expect(ubtraction(-4, 6)).toBe(-10);
  });

  it("should return -5", () => {
    expect(ubtraction(5, 10)).toBe(-5);
  });

  it("should return -2", () => {
    expect(ubtraction(8, 10)).toBe(-2);
  });
});
