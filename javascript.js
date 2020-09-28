// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


var qanda = [
    {
        question: "Inside which element do we put the javascript",
        choices: ["js", "script", "javascript", "scripting"],
        answer: "Script"
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        choices: ["False", "True"],
        answer: "False"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        choices: ["The head section", "The body section", "Both the head and the body section is correct", "C4"],
        answer: "Both head section and the body section are correct"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        choices: ["This is a comment", "//This is a comment", "<!--This is a comment-->", "C4"],
        answer: "// This is a comment"
    }
];

var question1 = 0;
var time = question.length * 60;
var timerId;

var userquestion = document.getElementById('questions');
var timeElement = document.getElementById('Choices');
var buttonElement = document.getElementById('start-screen');
var timerElement = document.getElementById('time');
var scoreElement = document.getElementById('final-score');
var submitBtn = document.getElementById("submit")
var initialsEl = document.getElementById("initials")


function startQuiz() {
  var startScreenEl = document.getElementById("start-screen"); 
    startScreenEl.setAttribute("class", "hide");

    userquestion.removeAttribute("class");

    timerId = setInterval(clockTick, 1000);

    timerEl.textContent = time;

    getQuestion();
}

function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];

    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;

    choicesEl.innerHTML = "";

    //loop over choices

    currentQuestion.choices.forEach(function(choice, i){
        //create new button for each choice
      var choiceNode = document.createElement("button");
      choiceNode.setAttribute("class" , "choice");
      choiceNode.setAttribute("value", choice); 
      
     
      choiceNode.textContent = i + i + ". " + choice;

      choiceNode.onclick = questionClick;

      choicesEl.appendChild(choiceNode);
    });
}

function questionClick(){

    if (this.value !== questions[currentQuestionIndex].answer) {
        time -= 30;

      if(time < 0){
          time =0;
      }

      timerEl.textContent = time;

      feedbackEl.textContent = "wrong";

    } else{
        feedbackEl.textContent = "Correct";
    }

    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

function quizEnd() {
    clearInterval(timerId);

    var endScreenEl = document.getElementById("end-screen");
    finalScoreEl.textContent = time;

    questionEl.setAttribute("class", "hide")
}

function clockTick() {
    time--;
    timerEl.textContent = time;

    if(time <= 0) {
        quizEnd
    }
}

function savingHighscore() {

    var initials = initialsEl.value.trim();


    if(initials !== "") {
        var highscores = 
        jSON.parse(window.localStorage.getItem("highscores")) || [];

        var newScore = {
            score: time,
            Initials: initials
        };

        highscores.push(newScore);
        window.localStorage.getItem("highscores", jSON.stringify(highscores));

        window.location.href = "highscores.html";
        }
    }

    function checkForEnter(event) {

        if(event.key === "Enter") {
            savingHighscore();
        }
    }

    submitBtn.onclick = savingHighscore;

    startBtn.onclick = startQuiz;

    initialsEl.onkeyup = checkForEnter;

   
        
    
    
        
   




   



// get questions
// check if user choice is right or wrong
// function to end quiz
// function to save score