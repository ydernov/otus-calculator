import addition from "math-operations/addition";
import division from "math-operations/division/index";
import exponentiation from "math-operations/exponentiation";
import factorial from "math-operations/factorial";
import multiplication from "math-operations/multiplication";
import square from "math-operations/square";
import subtraction from "math-operations/subtraction";
import { integerMatcher } from "utils";
import { DoubleArgFunction, Operation, SinleArgFunction } from "./types";

const operations: Operation[] = [
  {
    argsCount: 2,
    matcher: / \+ /,
    function: addition,
    priority: 1,
    name: "addition",
  },
  {
    argsCount: 2,
    matcher: / - /,
    function: subtraction,
    priority: 1,
    name: "subtraction",
  },
  {
    argsCount: 2,
    matcher: / \* /,
    function: multiplication,
    priority: 2,
    name: "multiplication",
  },
  {
    argsCount: 2,
    matcher: / \/ /,
    function: division,
    priority: 2,
    name: "division",
  },
  {
    argsCount: 2,
    matcher: / \^ /,
    function: exponentiation,
    priority: 3,
    name: "exponentiation",
  },

  {
    argsCount: 1,
    matcher: / !/,
    function: factorial,
    priority: 3,
    name: "factorial",
  },
  {
    argsCount: 1,
    matcher: / \*\*/,
    function: square,
    priority: 3,
    name: "square",
  },
];

operations.sort((op1, op2) => op2.priority - op1.priority);

const singleArgOperationCall = (func: SinleArgFunction, a: string) =>
  func(parseInt(a)).toString();

const doubleArgOperationCall = (
  func: DoubleArgFunction,
  a: string,
  b: string
) => func(parseInt(a), parseInt(b)).toString();

const operationExpressionMatcher = (operation: Operation) => {
  return operation.argsCount === 1
    ? new RegExp(
        `( - )?(${integerMatcher.source})(${operation.matcher.source})`,
        "g"
      )
    : new RegExp(
        `( - )?(${integerMatcher.source})(${operation.matcher.source})(${integerMatcher.source})`,
        "g"
      );
};

export {
  operations,
  singleArgOperationCall,
  doubleArgOperationCall,
  operationExpressionMatcher,
};

export * from "./types";
