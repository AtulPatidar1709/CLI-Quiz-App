var readlineSync = require("readline-sync");
var score = 0;
// var iin = "e";
var userName = readlineSync.question("What is your Name? ");
console.log("Hi " + userName + " let's Indian States Capitals");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("Yes you are wright");
    score = score + 1;
  } else {
    console.log("You are Wrong Try Again");
    score = score;
  }
  console.log("Your Score is " + score);
  console.log("____________")

  if (score === 7) {
    console.log("Congratulations You Know States very well");
    console.log("Your Score is " + score)
    console.log("__________")
  }
}

play("Gujarat", "Gandhinagar");

play("Maharashtra", "Mumbai");

play("Rajasthan", "Jaipur");

play("Madhya Pradesh	", "Bhopal");

play("West Bengal	", "Kolkata");

play("Telangana	", "Hyderabad");

play("Himachal Pradesh ", "Shimla");

play("Chhattisgarh ", "Raipur");


