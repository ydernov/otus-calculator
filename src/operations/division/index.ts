export default (a: number, b: number) => {
  if (b === 0) {
    throw Error("Can't divide by zero!");
  }
  return a / b;
};
