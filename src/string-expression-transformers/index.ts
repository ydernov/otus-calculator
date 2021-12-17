import {
  doubleArgOperationCall,
  operations,
  singleArgOperationCall,
  Operation,
  SinleArgFunction,
  operationExpressionMatcher,
} from "operations";

import invertStringNumberSign from "utils/invert-string-number-sign";

const reduceInputStringByOperationsObject = (
  expression: string,
  reducer = operationReducer
) => {
  return operations.reduce<string>((expressionString, operation) => {
    return reducer(expressionString, operation);
  }, expression);
};

type OperationStringReplacerFunc = (
  opreation: Operation,
  optionalMinus: string | undefined,
  firstNumber: string,
  secondNumber: string
) => string;

const operationStringReplacer: OperationStringReplacerFunc = (
  { argsCount, priority, function: func },
  optionalMinus = "",
  firstNumber,
  secondNumber
): string => {
  let result: string = optionalMinus;
  if (argsCount === 1) {
    result += singleArgOperationCall(func as SinleArgFunction, firstNumber);
  } else if (priority === 1 && optionalMinus) {
    result += invertStringNumberSign(
      doubleArgOperationCall(
        func,
        invertStringNumberSign(firstNumber),
        secondNumber
      )
    );
  } else {
    result += doubleArgOperationCall(func, firstNumber, secondNumber);
  }

  return result;
};

const replacerCaller =
  (operation: Operation, replacer = operationStringReplacer) =>
  (
    _: any,
    optionalMinus: string | undefined,
    firstNumber: string,
    operationSign: string,
    secondNumber: string
  ) => {
    if (!firstNumber) throw Error("firstNumber must be defined");
    if (!operationSign) throw Error("operationSign must be defined");
    return replacer(operation, optionalMinus, firstNumber, secondNumber);
  };

const operationReplacer = (
  expression: string,
  operationRegexp: RegExp,
  operation: Operation,
  replacer = replacerCaller
) => {
  const replaceFunc = replacer(operation);
  return expression.replace(operationRegexp, replaceFunc);
};

type OperationReducerFunc = (
  expression: string,
  operation: Operation,
  matcher?: typeof operationExpressionMatcher,
  replacer?: typeof operationReplacer,
  recursiveCall?: OperationReducerFunc
) => string;

const operationReducer: OperationReducerFunc = (
  expression,
  operation,
  matcher = operationExpressionMatcher,
  replacer = operationReplacer,
  recursiveCall = operationReducer
): string => {
  if (operation.matcher.test(expression)) {
    const regexp = matcher(operation);
    const newexp = replacer(expression, regexp, operation);

    return recursiveCall(newexp, operation, matcher, replacer, recursiveCall);
  } else return expression;
};

export {
  reduceInputStringByOperationsObject,
  operationStringReplacer,
  operationReducer,
  operationReplacer,
  replacerCaller,
};
