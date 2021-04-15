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

var timerEl = document.getElementById('timer');
var startBtn = document.getElementById('start');

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
            //call function;
        }
    }, 1000);
};

startBtn.onclick = countdown;