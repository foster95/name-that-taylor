/* use strict */
/* jshint esversion: 6 */
/* jshint -W033 */


// Import Questions from Questions Folder - support on import provided by mentor Spencer Barribal
import { debutQuestions } from './questions/questions-debut.js';
import { fearlessQuestions } from './questions/questions-fearless.js';
import { speakNowQuestions } from './questions/questions-speaknow.js';
import { redQuestions } from './questions/questions-red.js';
import { nineteeneightynineQuestions } from './questions/questions-nineteeneightynine.js';
import { reputationQuestions } from './questions/questions-reputation.js';
import { loverQuestions } from './questions/questions-lover.js';
import { folkloreAndEvermoreQuestions } from './questions/questions-folklore-and-evermore.js';
import { midnightsQuestions } from './questions/questions-midnights.js';
import { theTorturedPoetsDepartmentQuestions } from './questions/questions-the-tortured-poets-department.js';


const allErasQuestions = {
    debut: debutQuestions,
    fearless: fearlessQuestions,
    speakNow: speakNowQuestions,
    red: redQuestions,
    nineteeneightynine: nineteeneightynineQuestions,
    reputation: reputationQuestions,
    lover: loverQuestions,
    folkloreAndEvermore: folkloreAndEvermoreQuestions,
    midnights: midnightsQuestions,
    ttpd: theTorturedPoetsDepartmentQuestions
};

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-button");
  const pickBtn = document.getElementById("pick-button");
  const homeBtn = document.getElementById("home-button");
  const anotherEraBtn = document.getElementById("another-era-button");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      startButton(); 
    });
  }
  if (pickBtn) {
    pickBtn.addEventListener("click", () => {
      pickButton(); 
    });
  }
    if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      homeButton(); 
    });
  }
    if (anotherEraBtn) {
    anotherEraBtn.addEventListener("click", () => {
      anotherEraButton(); 
    });
  }
});

// General Code for the DOM
const questionEl = document.getElementById ("question");
const scoreEl = document.getElementById ("score");
let currentQuestionIndex = 0;
let currentQuestions = [];

/**
 * Show/hide sections as required
 */
function showSection(id) {
    document.getElementById(id).classList.remove("disappear");
}
function hideSection (id) {
    document.getElementById(id).classList.add("disappear");
}

// On DOM ready, show welcome and hide others
window.addEventListener('DOMContentLoaded', () => {
  showSection("website-opener");
  hideSection("opening-instructions");
  hideSection("logo");
  hideSection("pick-era");
});

/**
 * On clicking "lets go", take the user to the instructions page
 */
function startButton() {
    showSection("logo");
    showSection("opening-instructions");
    hideSection("website-opener");
}

/**
 * on clicking "it's been a long time coming" the user is taken to the era 
 * selection option
 */
function pickButton() {
    hideSection("opening-instructions");
    showSection("pick-era");
}

/**
 * select Era then open quiz
 */
const eraButtons = document.getElementsByClassName ("era-selector-button");
for (let button of eraButtons) {
    button.addEventListener("click", function() {
        let gameChoice = this.getAttribute ("data-type");
        if (allErasQuestions[gameChoice]) {
            hideSection ("pick-era");
            showSection ("quiz-space");
            showSection ("additional-buttons");
            revealEra(gameChoice);
            startQuiz (allErasQuestions [gameChoice]);
        } 
    });
}

/**
 *  Format Era titles for readability at top of page
 */
function formatEraName(era) {
  const eraNames = {
    debut: "Debut",
    fearless: "Fearless",
    speakNow: "Speak Now",
    red: "Red",
    nineteeneightynine: "1989",
    reputation: "Reputation",
    lover: "Lover",
    folkloreAndEvermore: "Folklore & Evermore",
    midnights: "Midnights",
    ttpd: "The Tortured Poets Department",
  };
  return eraNames [era];
}

// Show correct Era at top of quiz
const eraEl = document.getElementById("era-label");
  
  function revealEra (era) {
    eraEl.innerText = formatEraName(era);
    }

/**
 * shuffle questions
 */
function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

// Score tracker
let score = 0;

// Quiz Logic - load and shuffle questions to only show 15)
function startQuiz (questionsArray){
    currentQuestions = shuffleArray(questionsArray).slice(0, 15);
    currentQuestionIndex = 0;
    showQuestion (currentQuestions[currentQuestionIndex]);
    score = 0;
    scoreEl.innerText = `0 / 15`;
}
const answerButtons = [
    document.querySelector(".answer1"),
    document.querySelector(".answer2"),
    document.querySelector(".answer3"),
    document.querySelector(".answer4")
];

/**
 * Show questions
 */
function showQuestion (quest) {
    questionEl.innerText = quest.question;

    // Enable button on each individual question
    quest.answers.forEach((answer, index) => {
        const btn = answerButtons [index];
        btn.disabled = false;
        btn.classList.remove("correct-answer", "wrong-answer");
        btn.innerText = answer;
        btn.onclick = () => {
            showAnswer (btn, index === quest.correct);
        };
    });
}

/**
 * Show answers
 */
function showAnswer (button, isCorrect) {
    // Update score if correct
    if (isCorrect) {
        score++;
        scoreEl.innerText = `${score} / 15`;
    }

    // Disable buttons so player cannot choose another and show colour highlight
    answerButtons.forEach((btn, index) => {
        btn.disabled = true;

      // Change colour to indicate if correct or incorrect answer
    if (index === currentQuestions [currentQuestionIndex].correct) {
        btn.classList.add("correct-answer");
    }    
    if (btn === button && !isCorrect) {
        btn.classList.add("wrong-answer");
    }
});

    // Jump to next question automatically after 1.5 seconds
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        setTimeout(() => {
            showQuestion(currentQuestions[currentQuestionIndex]);
        }, 1500);
    } else {
        setTimeout (() => {
            endQuiz ();
        }, 1500);
    }
}

/** 
 * End Quiz
 */
function endQuiz () {
    hideSection("quiz-space");
    hideSection ("additional-buttons");
    showSection ("final-score-space");
    finalScore();
}

/**
 * Final score messages
 */
function finalScore () {
    // Window reload suggested by mentor Spencer Barribal
    const finalScoreEl = document.getElementById("final-score");
    const button = `
    <button class="final-score-button"  onclick="window.location.reload();">Home</button>
        `
    
    if (score === 15) {
        finalScoreEl.innerHTML = `
        <strong>Your final score is ${score} / 15!</strong>
        <p>Okay, wait a minute... you got a perfect score?! Are you kidding me right now?!</p>
        <p>This wasn't just knowing the answers <em>"All Too Well"</em>; it was <em>"(Mr) Perfectly Fine"</em> taken to an entirely new level! You didn't just pass; you absolutely conquered that quiz like it was <em>"The Great War"</em>, and you were the only one left standing.</p>
        <p>You're not just a Swiftie; you're a certified <em>"Mastermind!"</em> It's as if you know the lyrics better than Taylor Swift herself sometimes. This is your moment to really make the whole place shimmer!</p>
        <p>So, to the quiz champion, CONGRATULATIONS! You've officially proven you're the ultimate, undisputed, 100%-scoring quiz legend. Go celebrate like you just won a Grammy; you absolutely earned it.</p>
        
        ${button}`;
    }
    else if (score >= 12 && score <= 14) {
        finalScoreEl.innerHTML = `
        <strong>Your final score is ${score} / 15!</strong>
        <p>Did you have <em>"The Lucky One"</em> on repeat while studying, or are you just a <em>"Mastermind</em> when it comes to all things Taylor? Because you absolutely slayed that quiz like it was a surprise album drop!</p>
        <p>We bet you were feeling <em>"Fearless"</em> walking into that, and now you're probably singing <em>"Long Live"</em> at the top of your lungs. You didn't just know the answers, you knew them <em>"All Too Well."</em></p>
        <p>Consider this your <em>"Picture to Burn"</em> moment for anyone who doubted your Swiftie knowledge.</p> 
        <p>You've officially entered your champion Era, and honestly, it looks <em>"Gorgeous"</em> on you!</p>
        <p>Congratulations, you magnificent, lyrical genius! Now, if you'll excuse us, we're just wondering if you'll ever let us in on your <em>"Mastermind"</em> strategy, because we're not as cool as you.</p>
        
        ${button}`;
    }
       else if (score >= 9 && score <= 11) {
        finalScoreEl.innerHTML = `
        <strong>Your final score is ${score} / 15!</strong>
        <p>Okay, so someone just jumped into that Taylor Swift quiz, and you know what? That's what truly matters! You showed up, gave it your all, and you're still a brilliant Swiftie.</p>
        <p>Sometimes, you don't know all the little secret Easter eggs, and honestly, that's totally okay! The whole point is to have fun. You just gotta <em>"Shake It Off"</em> when it comes to the score and remember what a dedicated fan you are.</p>
        <p>Don't even sweat it! There's always a <em>"Begin Again"</em> moment for the next quiz, and we know you'll absolutely crush it. Congratulations on playing along!</p>
        
        ${button}`;
    }
     else if (score >= 4 && score <= 8) {
        finalScoreEl.innerHTML = `
        <strong>Your final score is ${score} / 15!</strong>
        <p>Well, that quiz was certainly a <em>"Bad Blood"</em> moment for some of us, wasn't it? But honestly, who cares if you didn't ace every single question, the important thing is you showed up, you played, and you still have an <em>"Invisible String"</em> connecting you to all things Taylor!</p>
        <p>Maybe you just had a <em>"Glitch"</em> on a few answers, or perhaps you were too busy jamming to the music in your head to focus on the trivia. Either way, there's absolutely no need to </em>"Shake It Off"</em>.</p>
        <p>Consider this just a little <em>"Long Story Short"</em> moment. It's all about the fun, plus, now you have even more reason to dive back into the discography. You can always <em>"Begin Again"</em> with another quiz!</p>
        
        ${button}`;
    }
     else if (score >= 1 && score <= 3) {
        finalScoreEl.innerHTML = `
        <strong>Your final score is ${score} / 15!</strong>
        <p>Okay, so maybe that quiz was more of a <em>"Death By A Thousand Cuts"</em> than a <em>"Love Story"</em> for you, but hold up! You got a few right, and in the grand scheme of things, that's like finding a secret message in one of Taylor's album booklets - a small victory, but a victory nonetheless!</p>
        <p>No need to <em>"Shake It Off"</em> in despair, because seriously, the fact that you even showed up and faced the music makes you a <em>"Fearless"</em> fan in our book. Maybe you were just too busy feeling <em>"22"</em> and having a blast to remember every deep cut, and that's perfectly okay!</p>
        <p>Consider this just a <em>"Long Story Short"</em> moment on your Swiftie journey. It's not about being a <em>"Mastermind"</em> every time, it's about the shared love for the music. Plus, now you've got a whole new set of lyrics to dive into for next time. You can always <em>"Begin Again"</em> with another quiz!</p>
        
        ${button}`;
    }
        else if (score === 0) {
        finalScoreEl.innerHTML = `
        <strong>Your final score is ${score} / 15!</strong>
        <p>Okay, so you just took a Taylor Swift quiz and landed squarely in a <em>"Blank Space"</em> when it came to the answers, huh? You know what? That's not a loss; that's just a clean slate ready to be filled with all the amazing Taylor knowledge you're about to gain!</p>
        <p>There's absolutely no need to <em>"Shake It Off"</em> in despair because, honestly, showing up and giving it a shot is a <em>"Fearless"</em> move in itself. Maybe you were just too busy feeling <em>"22"</em> and having a good time, or perhaps you were already mentally planning your next eras fit!</p>
        <p>Consider this just a <em>"Long Story Short"</em> moment. The real win isn't about the score; it's about the pure, unadulterated love for Taylor's music that brought you to the quiz in the first place.</p> 
        <p>You're still connected by an <em>"Invisible String"</em> to this fandom. Plus, now you have all the songs to re-listen to and all the lyrics to learn! We're confident that next time, you'll be singing a different tune and going <em>"Clean"</em> on that scoreboard!</p>
        
        ${button}`;
    }
}

/**
 * Add function to make home button work
 */
function homeButton() {
    hideSection("quiz-space");
    hideSection("final-score-space");
    hideSection("pick-era");
    hideSection("opening-instructions");
    hideSection("additional-buttons");
    hideSection("logo");
    showSection("website-opener");
}

/**
 * Add function to make another era button work
 */
function anotherEraButton () {
    hideSection ("quiz-space");
    hideSection("final-score-space");
    hideSection ("additional-buttons");
    
    // Reset quiz for new questions
    score = 0;
    currentQuestionIndex = 0;
    currentQuestions = [];

    // Show pick era interface
    showSection ("pick-era");
}