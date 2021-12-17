import square from "./index";
import * as exponentiation from "math-operations/exponentiation";

describe("Check call exponentiation func with result", () => {
  const spy = jest.spyOn(exponentiation, "default");
  it("should call with 3 and 2", () => {
    expect(square(3)).toBe(9);
    expect(spy).toHaveBeenCalledWith(3, 2);
  });

  it("should call with 10 and 2", () => {
    expect(square(10)).toBe(100);
    expect(spy).toHaveBeenCalledWith(10, 2);
  });

  it("should call with -33 and 2", () => {
    expect(square(-33)).toBe(1089);
    expect(spy).toHaveBeenCalledWith(-33, 2);
  });

  it("should call with 0 and 2", () => {
    expect(square(0)).toBe(0);
    expect(spy).toHaveBeenCalledWith(0, 2);
  });
});

afterAll(jest.restoreAllMocks);
