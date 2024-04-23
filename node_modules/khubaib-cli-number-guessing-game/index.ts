#! /usr/bin/env node
import inquirer from "inquirer"

console.log("welcome to Muhammad khubaib cli number guessing game");

const RandomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number(number limit 1 to 5):",
    }
]);

if(answer.userGuessedNumber === RandomNumber){
    console.log("Congratulation ! you guess a correct number");
}
else{
    console.log("Sorry, you guess a wrong number");
}
