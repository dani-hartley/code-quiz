//When start button is clicked
//Start the timer
//Present a question

//When question is answered
//Notify if the answer was correct or not
//present a new question
//if answered incorrectly subtract time

//When all question are answered or time reaches 0
//Game is over

//When Game is over
//save initials and score

//Array holding all the questions and answers bank
var quizQuestions = [{
    question: "Commonly used data types DO NOT include:",
    choiceA: "strings",
    choiceB: "booleans",
    choiceC: "alerts",
    choiceD: "numbers",
    correctAnswer: "alerts"
},
{
    question: "The condition in an if / else statement is enclosed with ____________.",
    choiceA: "quotes",
    choiceB: "curly brackets",
    choiceC: "parenthesis",
    choiceD: "square brackets",
    correctAnswer: "parenthesis"
},
{
    question: "String values must be enclosed within _______ when being assigned to variables",
    choiceA: "commas",
    choiceB: "curly brackets",
    choiceC: "quotes",
    choiceD: "parenthesis",
    correctAnswer: "quotes"
},
{
    question: "Arrays in JavaScript can be used to store ___________.",
    choiceA: "numbers and strings",
    choiceB: "other arrays",
    choiceC: "booleans",
    choiceD: "all of the above",
    correctAnswer: "all of the above"
},
{
    question: "A very useful toll used during development and debugging for printing content to the debugger is:",
    choiceA: "JavaScript",
    choiceB: "Bterminal/bash",
    choiceC: "for loops",
    choiceD: "console.log",
    correctAnswer: "console log"
},
]

// Set score to start at 0 
var score = 0;
var timerEl = document.getElementById('timer');
var startBtn = document.getElementById('start');
var wrapperEl = document.getElementById('wrapper');
var quizEl = document.getElementById('quiz')

//Timer 
function countdown() {
    var timeLeft = 75;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = 'Time Left: ' + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);
    quizDisplay();
};


//DISPLAY QUIZ
//Remove text in Quiz ID
//Add Current question to Quiz ID
//Remove start button
// Unhide choices
// Current Quiz answers to buttons
var choices =document.getElementById("choices");
var choiceA =document.getElementById("choiceA");
var choiceB =document.getElementById("choiceB");
var choiceC =document.getElementById("choiceC");
var choiceD =document.getElementById("choiceD");
var currentIndex = 0;
var currentQuizObj = quizQuestions[currentIndex];



function quizDisplay() {
    quizEl.innerHTML = currentQuizObj.question;
    startBtn.remove();
    choices.style.display = "inline-block";
    choiceA.innerHTML = currentQuizObj.choiceA;
    choiceB.innerHTML = currentQuizObj.choiceB;
    choiceC.innerHTML = currentQuizObj.choiceC;
    choiceD.innerHTML = currentQuizObj.choiceD;

}

startBtn.onclick = countdown;