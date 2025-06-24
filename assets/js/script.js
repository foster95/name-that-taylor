// Global Variables

const wrapper = document.getElementById ("wrapper")
const question = document.getElementById("question");
const answer0 = document.getElementById("answer0");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const score = document.getElementById ("score");

// Questions - Debut

const debutQuestions = [
    {
    "question": "And I was right there beside him all summer long",
    "answers": ["Picture to Burn", "Tim McGraw", "Cold As You", "Should Have Said No"],
    "correct": 1
    },

    {
    "question": "So watch me strike a match on all my wasted time",
    "answers": ["Picture to Burn", "Stay Beautiful", "Mary's Song (Oh My My My)", "Our Song"],
    "correct": 0
    },

    {
    "question": "Every smile you fake is so condescending, counting all the scars you made",
    "answers": ["Tim McGraw", "Invisible", "A Perfectly Good Heart", "Cold As You"],
    "correct": 3
    },

]

let questionNumber = 0;
let scoreNumber = 0;

function loadQuestion(){
    question.innerText = debutQuestions[questionNumber].question;
}

function loadAnswers(){
    answer0.innerText = debutQuestions[questionNumber].answers[0];
    answer1.innerText = debutQuestions[questionNumber].answers[1];
    answer2.innerText = debutQuestions[questionNumber].answers[2];
    answer3.innerText = debutQuestions[questionNumber].answers[3];
}

function callQuiz (){
    loadQuestion();
    loadAnswers();
    addCorrectAnswer();
}

function checkAnswer(answerClicked) {
    correctAnswer = debutQuestions[questionNumber].correct;
    if (answerClicked === correctAnswer) {
        console.log ("you got it right, well done!");
    }
}

function addCorrectAnswer() {
    scoreNumber++;
}

callQuiz();

