import {
  integerMatcher,
  removePrecedingZerosFromStringNumbers,
  validStringCheck,
} from "./index";

describe("Matches", () => {
  test("0", () => {
    expect("0").toMatch(integerMatcher);
  });

  test("-77", () => {
    expect("-77").toMatch(integerMatcher);
  });

  test(" qwe  -6", () => {
    expect(" qwe  -6").toMatch(integerMatcher);
  });

  test("0123", () => {
    expect("0123").toMatch(integerMatcher);
  });
});

describe("NonMatches", () => {
  test("", () => {
    expect("").not.toMatch(integerMatcher);
  });

  test(" ", () => {
    expect(" ").not.toMatch(integerMatcher);
  });

  test("qwe", () => {
    expect("qwe").not.toMatch(integerMatcher);
  });

  test("- qwe", () => {
    expect("- qwe").not.toMatch(integerMatcher);
  });
});

describe("exports are defined", () => {
  test("removePrecedingZerosFromStringNumbers", () => {
    expect(removePrecedingZerosFromStringNumbers).toBeDefined();
  });

  test("validStringCheck", () => {
    expect(validStringCheck).toBeDefined();
  });
});
