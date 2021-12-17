const factorial = (a: number): number => {
  if (!Number.isInteger(a) || a < 0) {
    throw Error("Only positive integers are allowed!");
  }
  if (a === 0 || a === 1) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
};

export default factorial;
