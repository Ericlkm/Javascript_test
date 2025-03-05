const questions = [
  {
    question: "What does 'NaN' stand for in JavaScript?",
    choices: ["Not a Number", "New and Native", "Not a Null", "None and Null"],
    answer: "Not a Number",
  },
  {
    question:
      "Which method is used to parse a string into an integer in JavaScript?",
    choices: ["parseInt()", "toString()", "parseFloat()", "parseDecimal()"],
    answer: "parseInt()",
  },
  //   {
  //     question: "What is the result of '2' + 2 in JavaScript?",
  //     choices: ["22", "4", "Error", "NaN"],
  //     answer: "22",
  //   },
  //   {
  //     question: "Which of the following is not a valid JavaScript data type?",
  //     choices: ["Boolean", "String", "Integer", "Object"],
  //     answer: "Integer",
  //   },
  //   {
  //     question: "What does the 'typeof' operator do in JavaScript?",
  //     choices: [
  //       "Checks the type of a variable",
  //       "Converts a variable to a type",
  //       "Assigns a type to a variable",
  //       "Returns the length of a string",
  //     ],
  //     answer: "Checks the type of a variable",
  //   },
  //   {
  //     question:
  //       "Which function is used to add an element at the end of an array in JavaScript?",
  //     choices: ["push()", "pop()", "shift()", "unshift()"],
  //     answer: "push()",
  //   },
  //   {
  //     question: "What will 'console.log(5 == '5')' output in JavaScript?",
  //     choices: ["true", "false", "Error", "undefined"],
  //     answer: "true",
  //   },
  //   {
  //     question: "How do you create a new object in JavaScript?",
  //     choices: [
  //       "var obj = {}",
  //       "var obj = []",
  //       "var obj = new Object()",
  //       "Both A and C",
  //     ],
  //     answer: "Both A and C",
  //   },
  //   {
  //     question:
  //       "Which method is used to remove the last element from an array in JavaScript?",
  //     choices: ["pop()", "shift()", "push()", "unshift()"],
  //     answer: "pop()",
  //   },
  //   {
  //     question:
  //       "What is the default value of a variable declared with 'let' before initialization in JavaScript?",
  //     choices: ["undefined", "null", "0", "false"],
  //     answer: "undefined",
  //   },
];

const currentQuestion = document.getElementById("question");
const topContainer = document.getElementById("top");
const choiceContainer = document.getElementById("choices");
const nextBtn = document.getElementById("nextBtn");
let currentQuestionIndex = 0;
let score = 0;
let pickedAnswer = false;
let correctAnswers = 0;
let wrongtAnswers = 0;

function displayQuestions() {
  nextBtn.disabled = true;
  const { question, choices } = questions[currentQuestionIndex];

  if (currentQuestionIndex < questions.length) {
    currentQuestion.textContent = `${currentQuestionIndex + 1} / ${
      questions.length
    }. ${question}`;

    choices.forEach((choice) => {
      const button = document.createElement("button");
      button.classList.add("option");
      button.textContent = choice;
      button.addEventListener("click", () => handleAnswer(choice));

      choiceContainer.appendChild(button);
    });
  }
}

function handleAnswer(selectedAnswer) {
  nextBtn.disabled = false;
  const { answer } = questions[currentQuestionIndex];
  const allBtns = document.querySelectorAll("#choices button");
  allBtns.forEach((btn) => {
    btn.disabled = true;
  });

  if (selectedAnswer === answer) {
    pickedAnswer = true;
  } else {
    pickedAnswer = false;
  }
}

function nextQuestion() {
  choiceContainer.innerHTML = "";
  currentQuestionIndex++;

  if (pickedAnswer) {
    score += 10;
    correctAnswers++;
    console.log(score);
  } else {
    wrongtAnswers++;
  }

  if (currentQuestionIndex < questions.length) {
    displayQuestions();
  } else {
    showResults();
  }
}

nextBtn.addEventListener("click", nextQuestion);

const resultContainer = document.getElementById("r-container");

function showResults() {
  topContainer.style.display = "none";
  nextBtn.style.display = "none";
  resultContainer.style.display = "block";
  results.textContent = score;
}

const restartBtn = document.getElementById("restart-btn");
const results = document.getElementById("results");

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  topContainer.style.display = "block";
  nextBtn.style.display = "block";
  resultContainer.style.display = "none";
  displayQuestions();
}
restartBtn.addEventListener("click", restartQuiz);
displayQuestions();
