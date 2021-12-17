export default (num: string) => {
  return /-/.test(num) ? num.replace(/-/, "") : "-" + num;
};
