import { integerMatcher } from "utils";
import {
  singleArgOperationCall,
  doubleArgOperationCall,
  operationExpressionMatcher,
} from "./index";
import { Operation } from "./types";

describe("singleArgOperationCall", () => {
  test("Calls callback function, returns string", () => {
    const result = 45;
    const arg1 = 2;
    const func = jest.fn<number, [number]>(() => result);
    expect(singleArgOperationCall(func, arg1.toString())).toBe(
      result.toString()
    );
    expect(func).toBeCalledWith(arg1);
  });
});

describe("doubleArgOperationCall", () => {
  test("Calls callback function, returns string", () => {
    const result = 11;
    const arg1 = 2;
    const arg2 = 5;
    const func = jest.fn<number, [number, number]>(() => result);
    expect(doubleArgOperationCall(func, arg1.toString(), arg2.toString())).toBe(
      result.toString()
    );
    expect(func).toBeCalledWith(arg1, arg2);
  });
});

describe("operationExpressionMatcher", () => {
  test("single argument operation", () => {
    const operation: Operation = {
      name: "addition",
      argsCount: 1,
      matcher: / test match /,
      priority: 1,
      function: jest.fn(),
    };

    expect(operationExpressionMatcher(operation)).toEqual(
      new RegExp(
        `( - )?(${integerMatcher.source})(${operation.matcher.source})`,
        "g"
      )
    );
  });

  test("double argument operation", () => {
    const operation: Operation = {
      name: "addition",
      argsCount: 2,
      matcher: / test match2 /,
      priority: 1,
      function: jest.fn(),
    };

    expect(operationExpressionMatcher(operation)).toEqual(
      new RegExp(
        `( - )?(${integerMatcher.source})(${operation.matcher.source})(${integerMatcher.source})`,
        "g"
      )
    );
  });
});
