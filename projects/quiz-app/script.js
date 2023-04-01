const quizData = [
  {
    id: 1,
    question: "What house at Hogwarts does Harry belong to?",
    a: "Slytherin",
    b: "Hufflepuff",
    c: "Racenclaw",
    d: "Gryffindor",
    correct: "d",
  },

  {
    id: 2,
    question: "What position does Harry play on his Quidditch team?",
    a: "Keeper",
    b: "Bludger",
    c: "Chaser",
    d: "Seeker",
    correct: "d",
  },
  {
    id: 3,
    question: "What does the Imperius Curse do?",
    a: "Kills",
    b: "Tortures",
    c: "Controls",
    d: "Turns the person into a pig",
    correct: "c",
  },
  {
    id: 4,
    question: "How did Harry get the scar on his forehead?",
    a: "He was attacked by a ballisk",
    b: "In a quiddicth accident",
    c: "Voldemort Tried to kill him when he was a baby",
    d: "He crashed the Weasleys car into the whomping tree",
    correct: "c",
  },
  {
    id: 5,
    question: "Who is Fluffy?",
    a: "Hermonies at",
    b: "Harrys owl",
    c: "Hagrids dragon",
    d: "a three headed dog",
    correct: "d",
  },
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2> You Answered correctly at ${score}/${quizData.length} quesions. </h2>
      <button onClick="location.reload()"> Reload </button>
      `;
    }
  }
});
