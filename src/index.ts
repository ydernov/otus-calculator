import readline from "readline";
import { initCalculator } from "main";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

initCalculator(rl);
