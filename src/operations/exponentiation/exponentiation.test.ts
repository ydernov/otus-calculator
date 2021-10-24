import exponentiation from "./index";

describe("Return zero ", () => {
  it("should return 0", () => {
    expect(exponentiation(0, 1)).toBe(0);
  });

  it("should return 0", () => {
    expect(exponentiation(0, 100)).toBe(0);
  });
});

describe("Return one ", () => {
  it("should return 1", () => {
    expect(exponentiation(0, 0)).toBe(1);
  });

  it("should return 1", () => {
    expect(exponentiation(1, 0)).toBe(1);
  });

  it("should return 1", () => {
    expect(exponentiation(100, 0)).toBe(1);
  });

  it("should return 1", () => {
    expect(exponentiation(-100, 0)).toBe(1);
  });
});

describe("Return positive ", () => {
  it("should return 2", () => {
    expect(exponentiation(2, 1)).toBe(2);
  });

  it("should return 9", () => {
    expect(exponentiation(-3, 2)).toBe(9);
  });

  it("should return 32", () => {
    expect(exponentiation(2, 5)).toBe(32);
  });
});

describe("Return negative ", () => {
  it("should return -1", () => {
    expect(exponentiation(-1, 1)).toBe(-1);
  });

  it("should return -32", () => {
    expect(exponentiation(-2, 5)).toBe(-32);
  });
});

describe("Return Infinity ", () => {
  it("should return Infinity", () => {
    expect(exponentiation(0, -1)).toBe(Infinity);
  });

  it("should return Infinity", () => {
    expect(exponentiation(0, -225)).toBe(Infinity);
  });
});
