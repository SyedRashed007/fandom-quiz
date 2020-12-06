// Packages
var readLineSync = require('readline-sync');
const chalk = require('chalk');


// Questions and answers
var quiz = {
  questions: [
    "In what house did the Sorting Hat almost put Harry? ",
    "What is Fluffy? ",
    "Which one of these is not a candy?",
    "What is Tom Riddle's middle name?",
    "How did Harry and Ron get to Howards in their Second Year?",
    "What subject does Professor McGonagall teach?",
    "Which of these is NOT an ingredient of Harry's wand?",
    "What did Dobby catch that set him free from Mr. Malfoy?",
    "What position does Harry play on the Quidditch Team?",
    "What dark Wizard did Albus Dumbledore defeat in 1945?",
  ],
  
  options: [
    ['Slytherin', 'Hufflepuff', 'Ravenclaw'],
    ['Threeheaded dog', 'snake', 'owl'],
    ["Bertie Botts Every Flavor Beans", "Chocolate Frogs", "Knuts"],
    ['Marvolo', 'Salazar', 'Lucius'],
    ['broomsticks', 'floo powder', 'flying car'],
    ['Transfiguration', 'History of magic', 'Defense against the Dark Arts'],
    ['Pheonix feather', 'holly', 'unicorn hair'],
    ['Harrys dirty socks', 'Mrs Norris', 'A Whoomping Willow'],
    ['chaser', 'keeper', 'seeker'],
    ['Nicolas Flamel', 'Grindelwald', 'Lord Voldemort']
  ],

  numOptions: ['a', 'b', 'c'],
  correctOptions: ['a','a','c','a','c','a','c','a','c','b']
};

//Welcome message
console.log(chalk.yellow("Hey there! Lets Test your knowlegde of "), 'Harry Potter');
console.log(chalk.yellow("Enter the correct option out of "), "a, b, c", chalk.yellow("for every question."));
console.log(chalk.yellow("Answer at least "), '3', chalk.yellow("questions out of "), '4', chalk.yellow("to move in to the next level.\n"));

//Taking username 
var userName = readLineSync.question('Enter your name to begin.\n');
console.log('All the best', chalk.yellow(userName), "let's go!\n");

// Working of the quiz
var score = 0;
console.log(chalk.red("Level 1"));
console.log("---------------------");
for(var i=0; i<10; i++) {
  if(i+1 == 4 && score >= 2){
    console.log();
    console.log(chalk.red("You have been levelled up!"));
    console.log("Level 2");
    console.log();
    console.log("---------------------");
  }

  if(i+1 == 4 && score < 2) {
    console.log(chalk.red("Oops! You couldn't clear Level 1"));
    break;
}
  if(i+1 == 8 && score >= 6) {
    console.log(chalk.red("You have been levelled up!"));
    console.log("Level 3");
    console.log();
     console.log("---------------------");
  }
  if(i+1 == 8 && score < 6) {
    console.log(chalk.red("Oops! You couldn't clear level 2"));
    break;
  }


var qNum = i+1 + ')';
  console.log(chalk.yellow(qNum, quiz.questions[i]));
  for(var j = 0; j < 3; j++){
    var option = quiz.numOptions[j] + '.';
    console.log(option, quiz.options[i][j]);
  }


var userAns = readLineSync.question("Your answer ");
console.log();
if(userAns == quiz.correctOptions[i]){
  score = score + 1;
  console.log(chalk.yellow("Correct answer!" ));
  console.log(chalk.yellow("Current score", score));
  console.log();
} else{
  console.log(chalk.red("Wrong answer"));
   console.log(chalk.red("Current score", score));
   console.log();
}
}