const chalk = require("chalk");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const limit = 5;
let counter = 1;

const randomNumber = Math.round(Math.random() * 10);

const game = () => {
  console.log(
    chalk.blue("Hello in our game!", chalk.underline("'Guest number 3000'"))
  );

  if (counter <= limit) {
    readline.question(chalk.yellow("Please enter your number\n"), (num) => {
      const number = Number(num);

      if (number === randomNumber) {
        console.log(chalk.green("You win! Congratulation!!!"));
        readline.close();
      }
      if (number < randomNumber) {
        console.log(chalk.blue("Your number is less, try again!"));
        counter += 1;
        game();
      }
      if (number > randomNumber) {
        console.log(chalk.blue("Your number is bigger, try again!"));
        counter += 1;
        game();
      }
    });
  } else {
    console.log(chalk.red("Game over, buy! :("));
    readline.close();
  }
};

game();
