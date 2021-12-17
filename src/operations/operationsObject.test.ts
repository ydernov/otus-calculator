import { operations, SinleArgFunction } from "./index";
import addition from "math-operations/addition";
import subtraction from "math-operations/subtraction";
import multiplication from "math-operations/multiplication";
import division from "math-operations/division/index";
import exponentiation from "math-operations/exponentiation";
import factorial from "math-operations/factorial";
import square from "math-operations/square";

jest.mock("math-operations/addition");
jest.mock("math-operations/subtraction");
jest.mock("math-operations/multiplication");
jest.mock("math-operations/division");
jest.mock("math-operations/exponentiation");
jest.mock("math-operations/factorial");
jest.mock("math-operations/square");

describe("Object validation", () => {
  test("Has 7 operations", () => {
    expect(operations.length).toBe(7);
  });

  test("Operations are sorted by priority", () => {
    const op = [...operations].sort((op1, op2) => op2.priority - op1.priority);
    expect(op).toEqual(operations);
  });
});

describe("Addition operation", () => {
  const operation = operations.find((op) => op.name === "addition");

  test("Should be in object", () => {
    expect(operation).toBeDefined();
  });

  test("Priority to equal 1", () => {
    expect(operation!.priority).toBe(1);
  });

  test("ArgsCount to equal 2", () => {
    expect(operation!.argsCount).toBe(2);
  });

  test("Matcher to match", () => {
    expect(operation!.matcher).toEqual(/ \+ /);
  });

  test("Function to match", () => {
    operation!.function(2, 3);
    expect(addition).toHaveBeenCalledWith(2, 3);
  });
});

describe("Subtraction operation", () => {
  const operation = operations.find((op) => op.name === "subtraction");

  test("Should be in object", () => {
    expect(operation).toBeDefined();
  });

  test("Priority to equal 1", () => {
    expect(operation!.priority).toBe(1);
  });

  test("ArgsCount to equal 2", () => {
    expect(operation!.argsCount).toBe(2);
  });

  test("Matcher to match", () => {
    expect(operation!.matcher).toEqual(/ - /);
  });

  test("Function to match", () => {
    operation!.function(2, 3);
    expect(subtraction).toHaveBeenCalledWith(2, 3);
  });
});

describe("Multiplication operation", () => {
  const operation = operations.find((op) => op.name === "multiplication");

  test("Should be in object", () => {
    expect(operation).toBeDefined();
  });

  test("Priority to equal 1", () => {
    expect(operation!.priority).toBe(2);
  });

  test("ArgsCount to equal 2", () => {
    expect(operation!.argsCount).toBe(2);
  });

  test("Matcher to match", () => {
    expect(operation!.matcher).toEqual(/ \* /);
  });

  test("Function to match", () => {
    operation!.function(2, 3);
    expect(multiplication).toHaveBeenCalledWith(2, 3);
  });
});

describe("Division operation", () => {
  const operation = operations.find((op) => op.name === "division");

  test("Should be in object", () => {
    expect(operation).toBeDefined();
  });

  test("Priority to equal 1", () => {
    expect(operation!.priority).toBe(2);
  });

  test("ArgsCount to equal 2", () => {
    expect(operation!.argsCount).toBe(2);
  });

  test("Matcher to match", () => {
    expect(operation!.matcher).toEqual(/ \/ /);
  });

  test("Function to match", () => {
    operation!.function(2, 3);
    expect(division).toHaveBeenCalledWith(2, 3);
  });
});

describe("Exponentiation operation", () => {
  const operation = operations.find((op) => op.name === "exponentiation");

  test("Should be in object", () => {
    expect(operation).toBeDefined();
  });

  test("Priority to equal 1", () => {
    expect(operation!.priority).toBe(3);
  });

  test("ArgsCount to equal 2", () => {
    expect(operation!.argsCount).toBe(2);
  });

  test("Matcher to match", () => {
    expect(operation!.matcher).toEqual(/ \^ /);
  });

  test("Function to match", () => {
    operation!.function(2, 3);
    expect(exponentiation).toHaveBeenCalledWith(2, 3);
  });
});

describe("Factorial operation", () => {
  const operation = operations.find((op) => op.name === "factorial");

  test("Should be in object", () => {
    expect(operation).toBeDefined();
  });

  test("Priority to equal 1", () => {
    expect(operation!.priority).toBe(3);
  });

  test("ArgsCount to equal 2", () => {
    expect(operation!.argsCount).toBe(1);
  });

  test("Matcher to match", () => {
    expect(operation!.matcher).toEqual(/ !/);
  });

  test("Function to match", () => {
    (operation!.function as SinleArgFunction)(2);
    expect(factorial).toHaveBeenCalledWith(2);
  });
});

describe("Square operation", () => {
  const operation = operations.find((op) => op.name === "square");

  test("Should be in object", () => {
    expect(operation).toBeDefined();
  });

  test("Priority to equal 1", () => {
    expect(operation!.priority).toBe(3);
  });

  test("ArgsCount to equal 2", () => {
    expect(operation!.argsCount).toBe(1);
  });

  test("Matcher to match", () => {
    expect(operation!.matcher).toEqual(/ \*\*/);
  });

  test("Function to match", () => {
    (operation!.function as SinleArgFunction)(2);
    expect(square).toHaveBeenCalledWith(2);
  });
});

afterAll(jest.clearAllMocks);
