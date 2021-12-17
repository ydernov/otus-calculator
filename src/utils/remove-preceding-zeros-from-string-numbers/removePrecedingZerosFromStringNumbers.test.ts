import { removePrecedingZerosFromStringNumbers } from "./index";

describe("Should replace zeros ", () => {
  test("005345000 to be 5345000", () => {
    expect(removePrecedingZerosFromStringNumbers("005345000")).toBe("5345000");
  });

  test("0 to be 0", () => {
    expect(removePrecedingZerosFromStringNumbers("0")).toBe("0");
  });

  test("000 to be 0", () => {
    expect(removePrecedingZerosFromStringNumbers("000")).toBe("0");
  });

  test("-054 to be -54", () => {
    expect(removePrecedingZerosFromStringNumbers("-054")).toBe("-54");
  });

  test("string0056700ff qwe-03477yuu -err-044-0-498 to be string56700ff qwe-3477yuu -err-44-0-498", () => {
    expect(
      removePrecedingZerosFromStringNumbers(
        "string0056700ff qwe-03477yuu -err-044-0-498"
      )
    ).toBe("string56700ff qwe-3477yuu -err-44-0-498");
  });
});
