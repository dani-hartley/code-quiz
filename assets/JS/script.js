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
        result.innerHTML = "CORRECT!";
        console.log("correct!");

    } else {
        result.innerHTML = "WRONG";
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
var userInput = document.getElementById("initials");
var scoreBoard = document.getElementById("score-screen");
var scoreList = document.getElementById('score-results');

function quizOver() {
    //Remove the last question
    quizEl.remove();
    choices.remove();
    result.remove();
    //Stop timer
    lastQuestion = true;
    //Display End Screen with score
    endScreen.classList.remove('hide');
    finalScore.innerHTML = timeLeft;

    //Capture Initials from Submit button
    var submit = document.getElementById("submit")
    submit.addEventListener("click", function highscore() {
        var userInitials = userInput.value;
        if (userInitials === null) {
            alert("Please add Initials")
            return;
        } else {
            var finalScore = {
                initials: userInitials,
                score: timeLeft
            };
            console.log(finalScore);
            var userScore = localStorage.getItem('userScore');
            if (userScore === null) {
                userScore = [];
            } else {
                userScore = JSON.parse(userScore);
            }
            userScore.push(finalScore);
            var newScore = JSON.stringify(userScore);
            localStorage.setItem("userScore", newScore);
            scoreDisplay();
        }
    })

};
//Display Score page
function scoreDisplay() {
    endScreen.classList.add('hide');
    scoreBoard.classList.remove('hide');
    // Display local storage
    var userScore = localStorage.getItem("userScore");
    userScore = JSON.parse(userScore);
    console.log(userScore);
    //pull local storage and displaying on Scoreboard
    if (userScore !== null) {
        for (var i = 0; i < userScore.length; i++) {
            var createLi = document.createElement("li");
            createLi.innerText = userScore[i].initials + " " + userScore[i].score;
            scoreList.appendChild(createLi);
        }
    }
};

var clear = document.getElementById("clear");
var playAgain = document.getElementById("playAgain");

//Clear Local Storage
clear.addEventListener("click", function clearScore() {
    window.localStorage.clear();
    scoreList.remove();
});
//Replay game
playAgain.addEventListener("click", function playAgain() {
    location.reload();
})

startBtn.onclick = countdown;