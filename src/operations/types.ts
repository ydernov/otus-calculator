export type SinleArgFunction = (a: number) => number;
export type DoubleArgFunction = (a: number, b: number) => number;

export type Operation = {
  argsCount: number;
  matcher: RegExp;
  function: SinleArgFunction | DoubleArgFunction;
  priority: number;
  name:
    | "addition"
    | "subtraction"
    | "multiplication"
    | "division"
    | "exponentiation"
    | "factorial"
    | "square";
};
