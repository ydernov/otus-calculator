import { operations } from "operations";

const validStringCheck = (string: string) => {
  const newString = string.trim();
  const checker = new RegExp(
    `[^ |0-9${operations.reduce<string>(
      (str, el) => str + "|" + el.matcher.source.trim(),
      ""
    )}]`,
    "g"
  );

  if (newString === "" || newString.indexOf(" ") === -1) return false;

  return !checker.test(string);
};

export { validStringCheck };
