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
    correctAnswer: "choiceC"
},
{
    question: "The condition in an if / else statement is enclosed with ____________.",
    choiceA: "quotes",
    choiceB: "curly brackets",
    choiceC: "parenthesis",
    choiceD: "square brackets",
    correctAnswer: "choiceC"
},
{
    question: "String values must be enclosed within _______ when being assigned to variables",
    choiceA: "commas",
    choiceB: "quotes",
    choiceC: "curly brackets",
    choiceD: "parenthesis",
    correctAnswer: "choiceB"
},
{
    question: "Arrays in JavaScript can be used to store ___________.",
    choiceA: "numbers and strings",
    choiceB: "other arrays",
    choiceC: "booleans",
    choiceD: "all of the above",
    correctAnswer: "choiceD"
},
{
    question: "A very useful toll used during development and debugging for printing content to the debugger is:",
    choiceA: "console.log",
    choiceB: "terminal/bash",
    choiceC: "for loops",
    choiceD: "JavaScript",
    correctAnswer: "choiceA"
},
]

// Set score to start at 0 
var score = 0;
var timerEl = document.getElementById('timer');
var startBtn = document.getElementById('start');
var wrapperEl = document.getElementById('wrapper');
var quizEl = document.getElementById('quiz');
var timeLeft = 75;
var lastQuestion = false;



//Timer 
function countdown() {

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = 'Time Left: ' + timeLeft;
            if (lastQuestion) return clearInterval(timeInterval);
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);
    quizDisplay(currentIndex);
};


//DISPLAY QUIZ
//Remove text in Quiz ID
//Add Current question to Quiz ID
//Remove start button
// Unhide choices
// Current Quiz answers to buttons
var choices = document.getElementById("choices");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var currentIndex = 0;
// var currentQuizObj = quizQuestions[currentIndex];



function quizDisplay(index) {
    quizEl.innerHTML = quizQuestions[index].question;
    startBtn.remove();
    choices.style.display = "inline-block";
    choiceA.innerHTML = quizQuestions[index].choiceA;
    choiceB.innerHTML = quizQuestions[index].choiceB;
    choiceC.innerHTML = quizQuestions[index].choiceC;
    choiceD.innerHTML = quizQuestions[index].choiceD;
};

//check answer function
//Compare user input to correct answer in quizQuestion Objects
//Notify user the answer was correct or incorrect
//If incorrect deduction 10 seconds

//Eventlistener to know that button has been clicked
choiceA.addEventListener("click", checkAnswer);
choiceB.addEventListener("click", checkAnswer);
choiceC.addEventListener("click", checkAnswer);
choiceD.addEventListener("click", checkAnswer);
var result = document.getElementById("result");

function checkAnswer(e) {
    //pulls ID of user input
    var userInput = e.target.id;
    // if statement to confirm userInput matches correctAnswer
    if (userInput === quizQuestions[currentIndex].correctAnswer) {
        result.innerHTML = "correct";
        console.log("correct!");

    } else {
        result.innerHTML = "wrong";
        timeLeft -= 10;
        console.log("wrong");

    }
    //Increament current Index to move to next question in the array. 
    currentIndex++;

    //create and if statement to determine the end of the project
    if (currentIndex === quizQuestions.length || timeLeft === 0) {
        quizOver();
    } else {

        //Display new questions and answer option. 
        setTimeout(function () {
            quizDisplay(currentIndex);
            result.innerHTML = "";
        }, 500);
    }

};

var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");

function quizOver() {
    quizEl.remove();
    choices.remove();
    result.remove();
    lastQuestion = true;
    endScreen.classList.remove('hide');
    finalScore.innerHTML= timeLeft;
    console.log(timeLeft);






    //display final score and prompt to enter intials
    //create input field for initials 
    // create submit button
    //save value of input field to variable for local storage
    //save input to local storage on button click 
}

startBtn.onclick = countdown;