import { integerMatcher } from "utils";

const removePrecedingZerosFromStringNumbers = (string: string) =>
  string.replace(
    /\d+/g,
    (q) => q.match(new RegExp(integerMatcher.source, "g"))![0] || ""
  );

export { removePrecedingZerosFromStringNumbers };
