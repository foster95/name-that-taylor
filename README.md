# name-that-taylor

Project 02 by Alice Foster

View live github project

# Name That Song - Taylor's Version

Name that Song - Taylor's Version is designed as a fun quiz, which allows users to test their knowledge about Taylor Swift's lyrics, from her very first album through to her most recent. 

The website is compromised of a simple quiz mechanic through JavaScript, which allows the user to choose the album they wish to test themselves on, before being prompted with random lyrics from that particular album. If the answer is correct, the answer will highlight in green, if it is incorrect the answer will highlight in red and the correct answer will be revealed. At the end of the 15 questions, the user will be greeted with an end of quiz message, which is dependent on how well they answered the quiz.





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