import { validStringCheck } from "./index";

describe("Valid cases", () => {
  test("0 + 9", () => {
    expect(validStringCheck("0 + 9")).toBeTruthy();
  });

  test("-0 - -9", () => {
    expect(validStringCheck("-0 - -9")).toBeTruthy();
  });

  test("-0 * -9", () => {
    expect(validStringCheck("-0 * -9")).toBeTruthy();
  });

  test("-0 / -9", () => {
    expect(validStringCheck("-0 / -9")).toBeTruthy();
  });

  test("5 !", () => {
    expect(validStringCheck("5 !")).toBeTruthy();
  });

  test("5 **", () => {
    expect(validStringCheck("5 **")).toBeTruthy();
  });

  test("5 ^", () => {
    expect(validStringCheck("5 ^")).toBeTruthy();
  });

  test("52679201 28964+-*/**! ", () => {
    expect(validStringCheck("52679201 28964+-*/**! ")).toBeTruthy();
  });
});

describe("Invalid cases", () => {
  test("0 ", () => {
    expect(validStringCheck("0 ")).toBeFalsy();
  });

  test("-9", () => {
    expect(validStringCheck("-9")).toBeFalsy();
  });

  test(" ", () => {
    expect(validStringCheck(" ")).toBeFalsy();
  });

  test("", () => {
    expect(validStringCheck("")).toBeFalsy();
  });

  test("abc", () => {
    expect(validStringCheck("abc")).toBeFalsy();
  });

  test("123.54 + 344.044", () => {
    expect(validStringCheck("123.54 + 344.044")).toBeFalsy();
  });
});
