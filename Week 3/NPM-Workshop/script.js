import chalk from "chalk";

console.log(chalk.blue("Hello world!"));

const log = console.log;

// Combine styled and normal strings
log(chalk.blue("This") + " is" + chalk.red(" so cool"));

log(chalk.red("NPM", chalk.underline.bgBlue("PACKAGES") + "!"));

log(
  chalk.bgRedBright(
    "I am red Line " +
      chalk.greenBright.underline.bold("with a green substring") +
      " that becomes red again!"
  )
);
