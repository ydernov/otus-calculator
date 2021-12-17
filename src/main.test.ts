import { getInput, initCalculator, processAnswer, processString } from "./main";

describe("processString", () => {
  test("calls amd return", () => {
    const testString = "my string";
    const stringCheckMock = jest.fn().mockReturnValueOnce(true);
    const sanitizeNumbersMock = jest
      .fn()
      .mockReturnValueOnce("sanitizeNumbersResult");
    const execOperationsMock = jest
      .fn()
      .mockReturnValueOnce("execOperationsResult");
    expect(
      processString(
        testString,
        stringCheckMock,
        sanitizeNumbersMock,
        execOperationsMock
      )
    ).toBe("execOperationsResult");
    expect(stringCheckMock).toHaveBeenCalledWith(testString);
    expect(sanitizeNumbersMock).toHaveBeenCalledWith(testString);
    expect(execOperationsMock).toHaveBeenCalledWith("sanitizeNumbersResult");
  });

  test("throw result", () => {
    const testString = "my string";
    const stringCheckMock = jest.fn().mockReturnValueOnce(false);
    const sanitizeNumbersMock = jest
      .fn()
      .mockReturnValueOnce("sanitizeNumbersResult");
    const execOperationsMock = jest
      .fn()
      .mockReturnValueOnce("execOperationsResult");
    expect(() =>
      processString(
        testString,
        stringCheckMock,
        sanitizeNumbersMock,
        execOperationsMock
      )
    ).toThrow("Only integers and operators are allowed!");
    expect(stringCheckMock).toHaveBeenCalledWith(testString);
    expect(sanitizeNumbersMock).not.toHaveBeenCalled();
    expect(execOperationsMock).not.toHaveBeenCalled();
  });
});

describe("processAnswer", () => {
  test("exit scenario", () => {
    const continueMock = jest.fn();
    const closeMock = jest.fn();
    const stringProcessorMock = jest.fn();

    processAnswer(continueMock, closeMock, stringProcessorMock)("exit");

    expect(continueMock).not.toHaveBeenCalled();
    expect(closeMock).toHaveBeenCalled();
    expect(stringProcessorMock).not.toHaveBeenCalled();
  });

  test("continue scenario, success", () => {
    const continueMock = jest.fn();
    const closeMock = jest.fn();
    const stringProcessorMock = jest
      .fn()
      .mockReturnValue("stringProcessorMockResult");

    const consoleLogSpy = jest.spyOn(console, "log");

    processAnswer(continueMock, closeMock, stringProcessorMock)("someString");

    expect(continueMock).toHaveBeenCalled();
    expect(closeMock).not.toHaveBeenCalled();

    expect(stringProcessorMock).toHaveBeenCalledWith("someString");

    expect(consoleLogSpy).toHaveBeenCalledWith(
      "\x1b[32mAnswer: %s\x1b[0m",
      "stringProcessorMockResult"
    );
  });

  test("continue scenario, error", () => {
    const continueMock = jest.fn();
    const closeMock = jest.fn();
    const stringProcessorMock = jest.fn().mockImplementation(() => {
      throw Error("error message");
    });

    const consoleLogSpy = jest.spyOn(console, "log");

    processAnswer(continueMock, closeMock, stringProcessorMock)("someString");

    expect(continueMock).toHaveBeenCalled();
    expect(closeMock).not.toHaveBeenCalled();

    expect(stringProcessorMock).toHaveBeenCalledWith("someString");

    expect(consoleLogSpy).toHaveBeenCalledWith(
      "\x1b[31mError: %s\x1b[0m",
      "error message"
    );
  });
});

describe("getInput", () => {
  test("processAnswer call, readlineInterface call", (done) => {
    const readlineInterfaceMock: any = {
      question: jest.fn(),
      close: jest.fn(),
    };

    const processAnswerMockResult = jest.fn();
    const processAnswerMock = jest.fn(
      (continueFunc: Function, exitFunc: Function) => {
        setTimeout(() => {
          continueFunc();

          expect(readlineInterfaceMock.question).toHaveBeenCalledWith(
            "Your expression >",
            processAnswerMockResult
          );

          exitFunc();

          expect(readlineInterfaceMock.close).toHaveBeenCalled();

          done();
        }, 0);

        return processAnswerMockResult;
      }
    );

    getInput(readlineInterfaceMock, processAnswerMock);
    expect.assertions(3);

    expect(readlineInterfaceMock.question).toHaveBeenCalledWith(
      "Your expression >",
      processAnswerMockResult
    );
  });
});

describe("initCalculator", () => {
  test("getInput called, console.log called", () => {
    const readlineInterfaceMock: any = {};
    const getInputMock = jest.fn();
    const consoleLogSpy = jest.spyOn(console, "log");

    initCalculator(readlineInterfaceMock, getInputMock);

    expect(consoleLogSpy).toHaveBeenCalledWith("Welcome to the calculator!");

    expect(getInputMock).toHaveBeenCalledWith(readlineInterfaceMock);
  });
});

afterAll(jest.restoreAllMocks);
