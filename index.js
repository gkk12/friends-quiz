var readlineSync = require("readline-sync");
questionOne = {
  question: "Who is my favorite superhero? ",
  answer: "Ironman"
}

questionTwo = {
  question: "Which is my favorite song? ",
  answer: "Stay"
}

var scores = [
  {
      name: "Gautham",
      highestScore: "2"
  },
  {
      name: "Sam",
      highestScore: "1"
  }
]

var score =0;

function checkCorrectness(questionToAsk,answer)
{
  var userAnswer = readlineSync.question(questionToAsk);

  if(userAnswer.toUpperCase() == answer.toUpperCase())
  {
    console.log("You are right");
    score = score +1;    
  }
  else
  {
    console.log("You are wrong. It is "+answer);
  }
  console.log("Score is: "+score);
}

var questions = [questionOne,questionTwo];

for(var i=0;i<questions.length;i++)
{
  //console.log("Entered for loop");
  checkCorrectness(questions[i].question,questions[i].answer);
}

console.log("High Scores-");
var highestScore = getHighScore();

function getHighScore()
{
  var topScore = 0;
  for(var j = 0;j< scores.length;j++)
  {
    console.log(scores[j].name, ":", scores[j].highestScore)
    topScore = checkIfHighScoreBeaten(topScore,scores[j].highestScore); 
  }
  return topScore;
}

function checkIfHighScoreBeaten(topScore,currentScore)
{
  if(topScore<currentScore)
    {
      topScore = currentScore;
    }
  return topScore;
}

if(score>=highestScore)
{
  console.log("Congrats, you have equalled the highest score. Kindly send a screenshot of the same to the admin");
}


