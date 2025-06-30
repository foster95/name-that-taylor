# name-that-taylor

Project 02 by Alice Foster

View live github project

# Name That Song - Taylor's Version

Name that Song - Taylor's Version is designed as a fun quiz, which allows users to test their knowledge about Taylor Swift's lyrics, from her very first album through to her most recent. 

The website is compromised of a simple quiz mechanic through JavaScript, which allows the user to choose the album they wish to test themselves on, before being prompted with random lyrics from that particular album. If the answer is correct, the answer will highlight in green, if it is incorrect the answer will highlight in red and the correct answer will be revealed. At the end of the 15 questions, the user will be greeted with an end of quiz message, which is dependent on how well they answered the quiz.

# Table of Contents
UX
User Stories
In order to prepare for the project, I created a series of user stories that were built in Github's project board. The user stories can be found below:

* As a user I need to be able to use the website in a clearly visible, engaging, responsive way. This should be the same across all devices and should be accessible for all users.

* As a user playing Name that Song - Taylor's Version, I should be able to easily access the instruction to the game at any time and should have no issues reading them.

* As a user playing the game I want to know if my answer if correct or incorrect immediately and have it add to a tally if the score is correct.

* As a game player and a Taylor fan I want the ability to choose the Era of songs I am guessing. No point in calling yourself a Swifty game if you can't guess ALL the Eras!

* As a user and Taylor fan I would like to recieve a Taylor themed message at the end of the game based on how many answers I got correct. These messages should be punny, light hearted and just a touch of fun.

* As a fan of Taylor and a user of the game I want the option to challenge myself to harder levels within each Era

* As a user playing the game, I do not want to have the same question shown to me everytime I play the game and instead want a randomised selection every time.

* As a user and player of the game, I would like an element of time pressure and to see a countdown clock which resets at every question

The full project board list can be found by clicking here




Bug Fix
Buttons not reenabling after being disabled making quiz defunct.

Original code in showAnswer () - 
    // Disable buttons so player cannot choose another
    answerButtons.forEach(btn => btn.disabled = true);

Realised that the quiz required a further function to reset the quiz after each button was clicked 

New code in showQuestion () - 
// Enable button on each individual question
    answerButtons.forEach(btn => btn = false);

    Quiz continued to not work despite putting in code to reset buttons on every question. Used Google debugger to work out that I was missing the button object so code could not reset. 

New code V2 in showQuestion () -   
// Enable button on each individual question
    answerButtons.forEach(btn => btn.disabled = false);

    Code now works and resets buttons on every question

    Ran into further problem when adding code to show buttons highlighted in green or red

New code for showAnswer () - 
    // Change colour to indicate if correct or incorrect answer
    if (index === currentQuestions [currentQuestionIndex].correct) {
        btn.classList.add("correct-answer");
    }    

    if (btn === selectedButton && !isCorrect) {
        btn.classList.add("wrong-answer");
    }

New code for showQuestion () -
 // Enable button on each individual question
    answerButtons.forEach(btn => {
        btn.disabled = false;
        btn.classList.remove("correct-answer", "wrong-answer");
    });

    This broke the entire quiz and deactivated all the buttons.

    A suggestion was made by the slack community to modify the show question function and add additional code - 

        btn.innerText = quest.answers[index];
        btn.onclick = () => {
            showAnswer (btn, index === quest.correct);
        }

    They pointed out that the showAnswer function would also need to be modified.

    This fixed the issue, however it broke the code by refusing to pull through the answer options. In order to fix this I did the following: