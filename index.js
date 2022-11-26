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
    score = score - 1;
  }
  console.log("Your Score is " + score);
  console.log("____________")

  if (score === 3) {
    console.log("Level One completed");
    console.log("__________")
  }
  else if (score === 5) {
    console.log("Congratulations You Know me very well");
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


