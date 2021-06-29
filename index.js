var readlineSync = require('readline-sync');
var score=0;
var userName = readlineSync.question("What's your name?: ");
console.log("Welcome "+userName+" to 'Do you know Kaivalya?'");

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You're absolutely right!");
    score++;
  }else{
    console.log("Oops, hard luck!");
  }
  console.log("You're score is: "+score);
  console.log("____");
};

var questionsToAsk = [{
  question: "Where is my native place?: ",
  answer: "Karwar"
},{
  question: "What is my age?: ",
  answer: "23"
},{
  question: "What am I crazy about?: ",
  answer: "Avengers"
},{
  question: "What is my favourite color?: ",
  answer: "Black"
},{
  question: "My birth month?: ",
  answer: "September"
}];

for(var i=0; i<questionsToAsk.length; i++){
  var currentQuestion = questionsToAsk[i];
  play(currentQuestion.question,currentQuestion.answer);
};

console.log("Awesome, your final score is: "+score);