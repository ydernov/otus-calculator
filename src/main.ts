import readline from "readline";
import { reduceInputStringByOperationsObject } from "string-expression-transformers";
import { removePrecedingZerosFromStringNumbers, validStringCheck } from "utils";

const initCalculator = (
  readlineInterface: readline.Interface,
  _getInput = getInput
) => {
  console.log("Welcome to the calculator!");
  _getInput(readlineInterface);
};

const getInput = (
  readlineInterface: readline.Interface,
  answerProcessor = processAnswer
) => {
  const continueFunc = () =>
    readlineInterface.question("Your expression >", _answerProcessor);

  const exitFunc = () => {
    readlineInterface.close();
    if (
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "development"
    ) {
      process.exit();
    }
  };

  const _answerProcessor = answerProcessor(continueFunc, exitFunc);
  continueFunc();
};

const processAnswer =
  (
    continueCallback: () => void,
    exitCallback: () => void,
    stringProcessor = processString
  ) =>
  (answer: string) => {
    if (answer === "exit") {
      exitCallback();
    } else {
      try {
        const result = stringProcessor(answer);
        console.log("\x1b[32mAnswer: %s\x1b[0m", result);
      } catch (e) {
        console.log("\x1b[31mError: %s\x1b[0m", (e as Error).message);
      }
      continueCallback();
    }
  };

const processString = (
  string: string,
  stringCheck = validStringCheck,
  sanitizeNumbers = removePrecedingZerosFromStringNumbers,
  execOperations = reduceInputStringByOperationsObject
) => {
  if (!stringCheck(string)) {
    throw Error("Only integers and operators are allowed!");
  }
  const sanitizeNums = sanitizeNumbers(string);
  return execOperations(sanitizeNums);
};

export { initCalculator, getInput, processString, processAnswer };
