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
    "question": "The only thing that keeps me wishing on a wishing star",
    "answers": ["A Perfectly Good Heart", "Our Song", "Teardrops on My Guitar", "Should Have Said No"],
    "correct": 2
    },

        {
    "question": "I'm just walking, trying to see through the rain coming down",
    "answers": ["Place in this World", "Stay Beautiful", "Cold As You", "Picture to Burn"],
    "correct": 0
    },

    {
    "question": "Every smile you fake is so condescending, counting all the scars you made",
    "answers": ["Tim McGraw", "Invisible", "A Perfectly Good Heart", "Cold As You"],
    "correct": 3
    },

    {
    "question": "I know I didn't read between the lines",
    "answers": ["Stay Beautiful", "The Outside", "Mary's Song (Oh My My My)", "Tim McGraw"],
    "correct": 1
    },

    {
    "question": "But you don't tell anyone that you might not be the golden one",
    "answers": ["Our Song", "A Perfectly Good Heart", "Tied Together with a Smile", "Picture to Burn"],
    "correct": 2
    },

    {
    "question": "It's hard to make a conversation, when he's taking my breath away",
    "answers": ["Stay Beautiful", "Our Song", "The Outside", "Mary's Song (Oh My My My)"],
    "correct": 0
    },
    
    {
    "question": "You say that the past is the past",
    "answers": ["A Perfectly Good Heart", "Tim McGraw", "Tied Together with a Smile", "Should Have Said No"],
    "correct": 3
    },

    {
    "question": "Take me back to the house in the backyard tree",
    "answers": ["Should Have Said No", "Mary's Song (Oh My My My)", "The Outside", "Tim McGraw"],
    "correct": 1
    },

    {
    "question": "I've heard every album, listened to the radio",
    "answers": ["Our Song", "Picture to Burn", "Teardrops on My Guitar", "A Perfectly Good Heart"],
    "correct": 0
    },

    {
    "question": "And I don't try to hide my tears, my secrets or my deepest fears",
    "answers": ["Tim McGraw", "I'm Only Me When I'm With You", "The Outside", "Cold As You"],
    "correct": 1
    },

    {
    "question": "There's a fire inside of you that can't help but shine through",
    "answers": ["Picture to Burn", "Tied Together with a Smile", "Invisible", "Should Have Said No"],
    "correct": 2
    },

    {
    "question": "Why would you wanna make the very first scar",
    "answers": ["Our Song", "Tim McGraw", "Stay Beautiful", "A Perfectly Good Heart"],
    "correct": 3
    },
]

const allErasQuestions = {
    debut: debutQuestions,
};

// General Code for the DOM
const eras = document.getElementById ("pick-era");
const quizSpace = document.getElementById ("quiz-space");
const question = document.getElementById ("question");
const answers = document.getElementById ("answer-space");
const nextQuestion = document.getElementById ("next-question")

let currentQuestionIndex = 0;
let currentQuestions = [];

// Era selector
let eraButtons = document.getElementsByClassName ("era-selector-button");

for (let button of eraButtons) {
    button.addEventListener("click", function() {
        let gameChoice = this.getAttribute ("data-type");

        if (allErasQuestions[gameChoice]) {
            startQuiz (allQuestions [gameChoice]);
        }
    });
}

// Quiz Logic
function startQuiz (questionsArray){
    currentQuestions = questionsArray;
    currentQuestionIndex = 0;
    eras.classList.add("d-none");
    quizSpace.classList.remove("d-none");
    showQuestion (currentQuestions[currentQuestionIndex]);
}