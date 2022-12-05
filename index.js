var readlineSync = require('readline-sync');
var score=0;
var userAnswer= readlineSync.question("What is your name? ");

console.log("Welcome " + userAnswer+ "! Do you know Deepak Choudhary?");
console.log("Play the quiz and let's see if you know him\n");

console.log("Type the correct option: a or b or c\n");
console.log("Follow the instructions carefully \n");

function play(question,answer)
{
   var userAsk=readlineSync.question(question);

  if(userAsk.toLowerCase() == answer.toLowerCase() ){
    console.log("You are right!");
    score=score+1;
  }
  else{
    console.log("You are wrong!");
  }
    console.log("Current Score is: " + score);
    console.log("------------\n");
}

var questions = [{
question:"1. Deepak's favourite colour would be: a. Blue b. Red c. White ",
answer: "c"
},
{
question:"2. Deepak's favorite food would be: a. North-Indian b. Chinese c. South-Indian ",
answer: "a"
},
{
question: "3. Deepak's favourite game to play would be: a. Cricket b. Football  c. BasketBall ",
answer: "b"
},
{
question:"4. Current place Deepak is living is: a. Pune b. Delhi c. Bokaro ",
answer: "a"
},
{
question:"5. Is Deepak Single?: a. Yes b. No ",
answer: "b"
},
{
question:"6. Deepak is wroking in which company: a. Microsoft b. Google c. Amazon ",
answer: "b"
},
];

for(var i=0; i<questions.length; i++)
{
var currentQuestion= questions[i];
play(currentQuestion.question, currentQuestion.answer)
}

console.log("Your Final Score is: " + score);
console.log("If you have scored 3+, then send a screenshot of your score");
console.log("\n");
console.log("Thanks for playing the quiz");
