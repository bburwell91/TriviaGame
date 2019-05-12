$(document).ready(function() {

var clock = 0;
$("#results").hide();
$("#countdown").hide();
$("#q-container").hide();

  // my questions
var myQuestions = [
  {
    question: "What is 150*5?",
    qName: "q1",
    answers: [600, 700, 750, 850],
    correctAnswer: 750,
    class: ".q1"
  },
  {
    question: "What is 534/6?",
    qName: "q2",
    answers: [89, 76, 86, 78],
    correctAnswer: 89,
    class: ".q2"
  },
  {
    question: "What is 444+333+222+111?",
    qName: "q3",
    answers: [1100, 1110, 1210, 1111],
    correctAnswer: 1110,
    class: ".q3"
  },
  {
    question: "What is 999-123?",
    qName: "q4",
    answers: [866, 876, 887, 875],
    correctAnswer: 876,
    class: ".q4"
  },
  {
    question: "What is 111*5-110?",
    qName: "q5",
    answers: [455, 450, 440, 445],
    correctAnswer: 445,
    class: ".q5"
  },
];

  // labels for each question to be stored in to display in the HTML
var labels = ["first", "second", "third", "fourth"];

  // function to display the questions and answers input radio
var displayQuestions = function() {
  // loops through prepending a new div with the class named in my array. Another loop that appends another div with the question from the array, with a class of question
  for (var j = 0; j < 5; j++) {
    $('#q-container').prepend('<div class="' + myQuestions[j].qName + '"></div>');
    $(myQuestions[j].class).append('<div class="question">' + myQuestions[j].question + '</div>');
    // loops through myQuestions array giving each answer a type, name, value and label to each of my questions looped above
    for (var i = 0; i <= 3; i++) {
      $(myQuestions[j].class).append('<input type="radio" name="' + myQuestions[j].qName + '" value="' + myQuestions[j].answers[i] + '"/><label for="' + labels[i] + '">' + myQuestions[j].answers[i] + '</label>');
    }
  }
}

    // start button
var startBtn = $("<button>").text("Start");
$("#start-screen").append(startBtn);

$("#start-screen").click(function() {
  $("#start-screen").hide();
  $("#countdown").show();
  $("#q-container").show();
  displayQuestions();

  // variables and function for the countdown 
  clock = 30;
  var x = document.getElementById("countdown");
  var timerFreq = setInterval(countdown, 1000);

function countdown() {
    if (clock === 0) {
      clearTimeout(timerFreq);
      $("#countdown").hide();
      $("#q-container").hide();
      $("#results").show();
      scoreGame();

    }
    else {
        x.innerHTML = clock + " seconds remaining";
        clock--;
    }
  }

    // submit button to grade quiz
var subBtn = $("<button>").text("Submit");
$("#submit").append(subBtn);

$("#submit").click(function() {
  scoreGame();
  clearTimeout(timerFreq);
  $("#results").show();
  $("#submit").hide();
  $("#countdown").hide();
  $("#q-container").hide();
});

});





  // function to score the game by checking if each input is checked and matches input with correctAnswer in the array
function scoreGame() {
  var correct = 0;
  var incorrect = 0;

  for (var i = 0; i < 5; i++) {
    if ($('input:radio[name="' + myQuestions[i].qName + '"]:checked').length) {
      if (parseInt($('input:radio[name="' + myQuestions[i].qName + '"]:checked')[0].value) === myQuestions[i].correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    } else {
      incorrect++;
    }
  }
  if (correct > 4) {
    $("#results").prepend("Good Job! You know Math! <br><br>");
    $("#results").append("Correct: " + correct + "<br>");
    $("#results").append("Incorrect: " + incorrect);
  } else {
    $("#results").prepend("Try again, dummy! <br><br>");
    $("#results").append("Correct: " + correct + "<br>");
    $("#results").append("Incorrect: " + incorrect);
  }
}

});

