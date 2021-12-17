import * as operationsModule from "operations";
import * as stringTransformersModule from "./index";
import * as invertStringNumberSign from "utils/invert-string-number-sign";

describe("operationStringReplacer", () => {
  describe("singleArgOperation case", () => {
    const singleArgOperationCallSpy = jest.spyOn(
      operationsModule,
      "singleArgOperationCall"
    );
    const singleArgOperation: operationsModule.Operation = {
      name: "addition",
      argsCount: 1,
      matcher: / test match /,
      priority: 0,
      function: jest.fn(),
    };

    test("singleArgOperationCall and return", () => {
      singleArgOperationCallSpy.mockImplementationOnce(() => "11");

      expect(
        stringTransformersModule.operationStringReplacer(
          singleArgOperation,
          "",
          "123",
          "999"
        )
      ).toBe("11");

      expect(singleArgOperationCallSpy).toHaveBeenCalledWith(
        singleArgOperation.function,
        "123"
      );
    });

    test("singleArgOperationCall and return with minus", () => {
      singleArgOperationCallSpy.mockImplementationOnce(() => "22");

      expect(
        stringTransformersModule.operationStringReplacer(
          singleArgOperation,
          "-",
          "123",
          "999"
        )
      ).toBe("-22");

      expect(singleArgOperationCallSpy).toHaveBeenCalledWith(
        singleArgOperation.function,
        "123"
      );
    });
  });

  describe("doubleArgOperation case", () => {
    const doubleArgOperationCallSpy = jest.spyOn(
      operationsModule,
      "doubleArgOperationCall"
    );
    describe("cases without the optionalMinus argument", () => {
      test("priority 1 spy call and return", () => {
        const doubleArgOperation: operationsModule.Operation = {
          name: "addition",
          argsCount: 2,
          matcher: / test match /,
          priority: 1,
          function: jest.fn(),
        };
        doubleArgOperationCallSpy.mockImplementationOnce(() => "101");

        expect(
          stringTransformersModule.operationStringReplacer(
            doubleArgOperation,
            undefined,
            "123",
            "999"
          )
        ).toBe("101");

        expect(doubleArgOperationCallSpy).toHaveBeenCalledWith(
          doubleArgOperation.function,
          "123",
          "999"
        );
      });

      test("priority 2 spy call and return", () => {
        const doubleArgOperation: operationsModule.Operation = {
          name: "addition",
          argsCount: 2,
          matcher: / test match /,
          priority: 2,
          function: jest.fn(),
        };
        doubleArgOperationCallSpy.mockImplementationOnce(() => "202");

        expect(
          stringTransformersModule.operationStringReplacer(
            doubleArgOperation,
            undefined,
            "123",
            "999"
          )
        ).toBe("202");

        expect(doubleArgOperationCallSpy).toHaveBeenCalledWith(
          doubleArgOperation.function,
          "123",
          "999"
        );
      });

      test("priority 3 spy call and return", () => {
        const doubleArgOperation: operationsModule.Operation = {
          name: "addition",
          argsCount: 2,
          matcher: / test match /,
          priority: 3,
          function: jest.fn(),
        };
        doubleArgOperationCallSpy.mockImplementationOnce(() => "303");

        expect(
          stringTransformersModule.operationStringReplacer(
            doubleArgOperation,
            "",
            "123",
            "999"
          )
        ).toBe("303");

        expect(doubleArgOperationCallSpy).toHaveBeenCalledWith(
          doubleArgOperation.function,
          "123",
          "999"
        );
      });
    });

    describe("cases with the optionalMinus argument", () => {
      test("priority 1 spy call and return", () => {
        const invertStringNumberSignSpy = jest.spyOn(
          invertStringNumberSign,
          "default"
        );

        const doubleArgOperation: operationsModule.Operation = {
          name: "addition",
          argsCount: 2,
          matcher: / test match /,
          priority: 1,
          function: jest.fn(),
        };
        doubleArgOperationCallSpy.mockImplementationOnce(() => "303");
        invertStringNumberSignSpy.mockImplementation((a) => a);

        expect(
          stringTransformersModule.operationStringReplacer(
            doubleArgOperation,
            "-",
            "123",
            "999"
          )
        ).toBe("-303");

        expect(invertStringNumberSignSpy).toHaveBeenCalledTimes(2);
        expect(invertStringNumberSignSpy).toHaveBeenNthCalledWith(1, "123");
        expect(invertStringNumberSignSpy).toHaveBeenNthCalledWith(2, "303");

        expect(doubleArgOperationCallSpy).toHaveBeenCalledWith(
          doubleArgOperation.function,
          "123",
          "999"
        );
      });

      test("priority 2 spy call and return", () => {
        const doubleArgOperation: operationsModule.Operation = {
          name: "addition",
          argsCount: 2,
          matcher: / test match /,
          priority: 2,
          function: jest.fn(),
        };
        doubleArgOperationCallSpy.mockImplementationOnce(() => "808");

        expect(
          stringTransformersModule.operationStringReplacer(
            doubleArgOperation,
            "-",
            "123",
            "999"
          )
        ).toBe("-808");

        expect(doubleArgOperationCallSpy).toHaveBeenCalledWith(
          doubleArgOperation.function,
          "123",
          "999"
        );
      });

      test("priority 3 spy call and return", () => {
        const doubleArgOperation: operationsModule.Operation = {
          name: "addition",
          argsCount: 2,
          matcher: / test match /,
          priority: 3,
          function: jest.fn(),
        };
        doubleArgOperationCallSpy.mockImplementationOnce(() => "909");

        expect(
          stringTransformersModule.operationStringReplacer(
            doubleArgOperation,
            "-",
            "123",
            "999"
          )
        ).toBe("-909");

        expect(doubleArgOperationCallSpy).toHaveBeenCalledWith(
          doubleArgOperation.function,
          "123",
          "999"
        );
      });
    });
  });

  afterAll(jest.restoreAllMocks);
});

describe("operationReducer", () => {
  test("no recursion calls, return initial expression", () => {
    const matcher = jest.fn();
    const replacer = jest.fn();
    const operationReducerMock = jest
      .fn()
      .mockImplementationOnce(() => "operationReducerMock_RecursiveResult");

    const oper: operationsModule.Operation = {
      name: "addition",
      argsCount: 2,
      matcher: / unmatching test match /,
      priority: 2,
      function: jest.fn(),
    };

    expect(
      stringTransformersModule.operationReducer(
        "initial expression",
        oper,
        matcher,
        replacer,
        operationReducerMock
      )
    ).toBe("initial expression");

    expect(matcher).not.toHaveBeenCalled();
    expect(replacer).not.toHaveBeenCalled();
    expect(operationReducerMock).not.toHaveBeenCalled();
  });

  test("recursion calls, return  expression", () => {
    const matcher = jest.fn().mockImplementationOnce(() => /result RegExp/);
    const replacer = jest.fn().mockImplementationOnce(() => "replacer_result");
    const operationReducerMock = jest
      .fn()
      .mockImplementationOnce(() => "operationReducerMock_RecursiveResult");

    const oper: operationsModule.Operation = {
      name: "addition",
      argsCount: 2,
      matcher: /initialExpression/,
      priority: 2,
      function: jest.fn(),
    };

    expect(
      stringTransformersModule.operationReducer(
        "initialExpression",
        oper,
        matcher,
        replacer,
        operationReducerMock
      )
    ).toBe("operationReducerMock_RecursiveResult");

    expect(matcher).toBeCalledTimes(1);
    expect(matcher).toHaveBeenCalledWith(oper);

    expect(replacer).toBeCalledTimes(1);
    expect(replacer).toHaveBeenCalledWith(
      "initialExpression",
      /result RegExp/,
      oper
    );

    expect(operationReducerMock).toBeCalledTimes(1);

    expect(operationReducerMock).toBeCalledWith(
      "replacer_result",
      oper,
      matcher,
      replacer,
      operationReducerMock
    );
  });
});

describe("operationReplacer", () => {
  test("calll string.replace, call replacer", () => {
    const replaceFuncMock = jest
      .fn()
      .mockImplementationOnce(() => "operationStringReplacerSpy_Result");

    const replacerMock = jest
      .fn()
      .mockImplementationOnce(() => replaceFuncMock);

    const stringReplaceSpy = jest.spyOn(String.prototype, "replace");

    const oper: operationsModule.Operation = {
      name: "addition",
      argsCount: 2,
      matcher: /opregex/,
      priority: 2,
      function: jest.fn(),
    };

    const regexp = /(optional)? (num1) (sign) (num2)/;

    expect(
      stringTransformersModule.operationReplacer(
        "optional num1 sign num2",
        regexp,
        oper,
        replacerMock
      )
    ).toBe("operationStringReplacerSpy_Result");

    expect(replacerMock).toHaveBeenCalledWith(oper);
    expect(stringReplaceSpy).toHaveBeenCalledWith(regexp, replaceFuncMock);

    jest.restoreAllMocks();
  });
});

describe("replacerCaller", () => {
  test("calll operationStringReplacer", () => {
    const operationStringReplacer = jest
      .fn()
      .mockImplementationOnce(() => "operationStringReplacerSpy_Result");

    const oper: operationsModule.Operation = {
      name: "addition",
      argsCount: 2,
      matcher: /opregex/,
      priority: 2,
      function: jest.fn(),
    };

    expect(
      stringTransformersModule.replacerCaller(oper, operationStringReplacer)(
        "_",
        "optionalMinus",
        "firstNumber",
        "operationSign",
        "secondNumber"
      )
    ).toBe("operationStringReplacerSpy_Result");

    expect(operationStringReplacer).toHaveBeenCalledWith(
      oper,
      "optionalMinus",
      "firstNumber",
      "secondNumber"
    );
  });

  test("should throw if firstNumber undefined", () => {
    const operationStringReplacer = jest
      .fn()
      .mockImplementationOnce(() => "operationStringReplacerSpy_Result");

    const oper: operationsModule.Operation = {
      name: "addition",
      argsCount: 2,
      matcher: /opregex/,
      priority: 2,
      function: jest.fn(),
    };

    expect(() =>
      stringTransformersModule.replacerCaller(oper, operationStringReplacer)(
        "_",
        "optionalMinus",
        "",
        "operationSign",
        "secondNumber"
      )
    ).toThrow("");

    expect(operationStringReplacer).not.toHaveBeenCalled();
  });

  test("should throw if operationSign undefined", () => {
    const operationStringReplacer = jest
      .fn()
      .mockImplementationOnce(() => "operationStringReplacerSpy_Result");

    const oper: operationsModule.Operation = {
      name: "addition",
      argsCount: 2,
      matcher: /opregex/,
      priority: 2,
      function: jest.fn(),
    };

    expect(() =>
      stringTransformersModule.replacerCaller(oper, operationStringReplacer)(
        "_",
        "optionalMinus",
        "firstNumber",
        "",
        "secondNumber"
      )
    ).toThrow("");

    expect(operationStringReplacer).not.toHaveBeenCalled();
  });
});

describe("reduceInputStringByOperationsObject", () => {
  test(" ", () => {
    const expr = "expression string";
    let times = 0;
    const operationsCount = operationsModule.operations.length;
    const mockReducer = jest.fn().mockImplementation(() => {
      times++;
      return expr + times;
    });

    expect(
      stringTransformersModule.reduceInputStringByOperationsObject(
        expr,
        mockReducer
      )
    ).toBe(expr + operationsCount);

    expect(mockReducer).toHaveBeenCalledTimes(operationsCount);

    expect(mockReducer).toHaveBeenNthCalledWith(
      1,
      expr,
      operationsModule.operations[0]
    );

    for (let i = 1; i < operationsCount; i++) {
      expect(mockReducer).toHaveBeenNthCalledWith(
        i + 1,
        expr + i,
        operationsModule.operations[i]
      );
    }
  });
});

afterAll(jest.clearAllMocks);
