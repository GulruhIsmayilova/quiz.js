//Suallar
const quizContainer = document.getElementById('quiz');

const questions = [
  {
    question: 'The Atlantic Ocean is the biggest ocean on Earth.',
    answer: 'false'
  },
  {
    question: 'Beauty and the Beast was Disney’s first Broadway musical.',
    answer: 'true'
  },
  {
    question: 'Brazil is the only nation to have played in every World Cup finals tournament.',
    answer: 'true'
  },
  {
    question: 'The name of Batman’s butler is Albert.',
    answer: 'false'
  },
  {
    question: 'Marvel published its first comic in October 1939.',
    answer: 'true'
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const question = questions[currentQuestion];
  const output = [];
  output.push(`<div>${question.question}</div>`);
  output.push(`<label><input type="radio" name="answer" value="true">True</label>`);
  output.push(`<label><input type="radio" name="answer" value="false">False</label>`);
  output.push(`<button onclick="checkAnswer()">Submit</button>`);
  quizContainer.innerHTML = output.join('');
}

function checkAnswer() {
  const userAnswer = document.querySelector("input[name='answer']:checked");
  if (userAnswer === null) {
    alert('Please select an answer.');
    return;
  }
  if (userAnswer.value === questions[currentQuestion].answer) {
    score++;
  }
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  const output = [];
  output.push(`<h2>Your score is ${score}/${questions.length}</h2>`);
  quizContainer.innerHTML = output.join('');
}

showQuestion();
