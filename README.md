# name-that-taylor

Project 02 by Alice Foster

View live github project

# Name That Song - Taylor's Version

Name that Song - Taylor's Version is designed as a fun quiz, which allows users to test their knowledge about Taylor Swift's lyrics, from her very first album through to her most recent. 

The website is compromised of a simple quiz mechanic through JavaScript, which allows the user to choose the album they wish to test themselves on, before being prompted with random lyrics from that particular album. If the answer is correct, the answer will highlight in green, if it is incorrect the answer will highlight in red and the correct answer will be revealed. At the end of the 15 questions, the user will be greeted with an end of quiz message, which is dependent on how well they answered the quiz.

![amiresponsive](https://github.com/foster95/name-that-taylor/blob/main/assets/images/am-i-responsive-image.png)
Image from [amiresponsive](https://ui.dev/amiresponsive?url=https://foster95.github.io/name-that-taylor/)
 
# Table of Contents
## UX
### User Stories
In order to prepare for the project, I created a series of user stories that were built in Github's project board. The user stories can be found below:

These user stories were then further broken down into the following categories:
* Must have
* Should have
* Could have

### Must Have
* As a user I need to be able to use the website in a clearly visible, engaging, responsive way. This should be the same across all devices and should be accessible for all users.
* As a user playing Name that Song - Taylor's Version, I should be able to easily access the instruction to the game at any time and should have no issues reading them.
* As a user playing the game I want to know if my answer if correct or incorrect immediately and have it add to a tally if the score is correct.
* As a game player and a Taylor fan I want the ability to choose the Era of songs I am guessing. No point in calling yourself a Swifty game if you can't guess ALL the Eras!
* As a user and Taylor fan I would like to recieve a Taylor themed message at the end of the game based on how many answers I got correct. These messages should be punny, light hearted and just a touch of fun.
* As a user playing the game, I do not want to have the same question shown to me everytime I play the game and instead want a randomised selection every time.

### Should Have
* As a fan of Taylor and a user of the game I want the option to challenge myself to harder levels within each Era

### Could Have
* As a user and player of the game, I would like an element of time pressure and to see a countdown clock which resets at every question
* As a user and player of the game, I would like the quiz to change colour palettes depending on which game I choose to run.

The full project board list can be found by clicking here

## Design
Name that Song - Taylor's Version has been designed as a single webpage, with a series of javascript instructions ensuring the user can move through each section of the quiz. It has been designed to be compact, simple to use and easy to navigate with an opening section, a instructions section, a choose your game section, a quiz section and a final result section.

### Wireframes

All wireframes were created using Balsamiq

### Mobile Wireframes
![Mobile Wireframe 1](https://github.com/foster95/name-that-taylor/blob/main/assets/images/balsamiq-wire-frame-mobile-1.png)
![Mobile Wireframe 2](https://github.com/foster95/name-that-taylor/blob/main/assets/images/balsamiq-wire-frame-mobile-2.png)
![Mobile Wireframe 3](https://github.com/foster95/name-that-taylor/blob/main/assets/images/balsamiq-wire-frame-mobile-3.png)

### Desktop Wireframes
![Desktop Wireframe 1](https://github.com/foster95/name-that-taylor/blob/main/assets/images/balsamiq-wire-frame-desktop-1.png)
![Desktop Wireframe 2](https://github.com/foster95/name-that-taylor/blob/main/assets/images/balsamiq%20wire-frame-desktop-2.png)
![Desktop Wireframe 3](https://github.com/foster95/name-that-taylor/blob/main/assets/images/balsamiq-wire-frame-desktop-3.png)

### Colour Palette
Choosing the colour palette for Name That Song - Taylor's Version, was a surprisingly tricky experience. As a female popstar who has existed and made music for the last 15 years, Taylor Swift has famously had to reinvent her image time and time again, making it impossible to associate her with one set of colours. With this in mind, I decided instead to base the colour palette of the project off the Era's Tour itself, rather than an individual album. I was originally inspired by the below colour palette, which I found when googling "Era's Tour colour palettes". 

On starting the project however, I realised that there were simply too many colours to create a cohesive colour palette across the site that would be an enjoyable user experience and didn't demand too much attention. With this in mind I scaled down the colour palette considerably, to the the pink, yellow and purple aspect of the Era's tour, and decided to go for black font as this would provide the best readability for all users. The final colour palette I settled on can be seen below:

### Imagery
The main background of the game is an image of the visuals used on the Era's Tour and its press releases and would be instantly recognisable to any fan and can be seen in the original Wireframes. The image was taken from Google and is in a high enough resolution that it does not pixelate.

The favicon was made by myself in Adobe photoshop, using the same image as the background with "Name that Song - Taylor's Version" written across it.

### Typography
As with colour palettes, Taylor Swift's logo has changed as much as her image, and upon looking into the font family for the Era's Tour itself, I found that this was a paid for font, and I was not happy with the similar Google fonts that were suggsted. This was an immediate issue as I had originlly intended for this font to be a standout feature on the website, which any fan would have an emotional reaction to. After researching the various logo's that Taylor Swift has had over the years, I found that there was a commonality of her using a handwriting style of font and decided instead to go down a combination of a serif font that would be easier for the user to read, and a cursive font that would make up the logo and any features of the website I wanted to stand out, such as headers. In the end I settled on the following two fonts from the Google Font library:

* Manrope - which is used for the bulk of the game (on instructions, the questions itself and any major bodies of text) which is a clean font that is readable across multiple font sizes
* Licorice - which is used for any details on the game (headers, album titles on the quiz) which is a handwritten style font, designed to emulate Taylor's handwritten notes.

## Features
### Welcome screen
Upon the user opening the game, they are immediately greeted with the games welcome screen. The welcome screen uses a landing wrapper to seat it in the middle of screens,regardless of the screen dimensions. The user is required to click the "Lets Go!" button to proceed. Upon clicking "Lets go!" the console automatically logs "start button clicked". The function startButton is initiated on click and takes the user to the Opening Instructions section.

    function startButton() {
    console.log("start button clicked");
    showSection("logo");
    showSection("opening-instructions");
    hideSection("website-opener");
    }

![Welcome Screen](https://github.com/foster95/name-that-taylor/blob/main/assets/images/opening-screen.png)

### Opening instructions section
Once the user has clicked the "lets go!" button, they are taken to a set of small instructions which explain to the user exactly how to play the game. The copy has been written to be informal and friendly and should illicit a positive user experience. When the user is ready to choose the level they will be playing at, they must click "It's been a long time coming...". Upon clicking this, "it's been a long time coming clicked" is logged to the console and the user is taken to the Choose Era section

    function pickButton() {
    console.log ("It's been a long time coming clicked");
    hideSection("opening-instructions");
    showSection("pick-era");
    }

![Opening Instructions](https://github.com/foster95/name-that-taylor/blob/main/assets/images/opening-instructions.png)

### Choose Era section
At this point the user is given the opportunity to choose which game they would like to choose based on their favourite album. In order to make the section as readable as possible for smaller screens (up to 375px) the Era's options are scrollable. For desktop screens and larger, the list splits into two columns to save space. Once the user has chosen which game they would like to play, the user will click the button and the following message is logged to the console: "clicked era (game title)" followed by "loading questions for (game title)"

    const eraButtons = document.getElementsByClassName ("era-selector-button");

    for (let button of eraButtons) {
    button.addEventListener("click", function() {
        let gameChoice = this.getAttribute ("data-type");
        console.log("Clicked era", gameChoice);

        if (allErasQuestions[gameChoice]) {
            console.log ("Loading questions for", gameChoice);
            hideSection ("pick-era");
            showSection ("quiz-space");
            showSection ("additional-buttons");
            revealEra(gameChoice);
            startQuiz (allErasQuestions [gameChoice]);
        } else {
            console.log ("No game questions found for", gameChoice)
        }
    });
    }

![Choose Era](https://github.com/foster95/name-that-taylor/blob/main/assets/images/choose-your-era.png)

### Quiz section
This is now the game part of the site. Upon choosing the game they would like to play the user is greeted with a screen which shows the following:
* The title of the game they chose - ie Fearless, Debut
* A lyric from the album related to that game
* Four options to choose from
* A score marker
* Additional buttons on the bottom of the screen which allow the user to escape the game, return to the instructions or choose another game to play. 

Once the user has chosen which button they want to choose for their answer they are immediately provided visual feedback to say if they have gotten the answer wrong or right. Correct answers turn the button green after 1.5 seconds, incorrect answers turn the button red after 1.5 seconds, all other buttons are frozen whilst this happens so the user cannot spam any buttons. If the user provides an incorrect answer, the correct answer will turn green at the same time. Correct answers will increment the score below the quiz. Incorrect answers will not increment the score. The quiz will automatically provide a new lyric after 1.5 seconds until it runs through 15 randomised lyrics.

    function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
    }

    // Quiz Logic - load and shuffle questions to only show 15)
    function startQuiz (questionsArray){
    currentQuestions = shuffleArray(questionsArray).slice(0, 15);
    currentQuestionIndex = 0;
    showQuestion (currentQuestions[currentQuestionIndex]);
    score = 0;
    scoreEl.innerText = `0 / 15`
    }

    const answerButtons = [
    document.querySelector(".answer1"),
    document.querySelector(".answer2"),
    document.querySelector(".answer3"),
    document.querySelector(".answer4")
    ]

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

    // Score tracker
    let score = 0


### Result section
Once the quiz has run through 15 questions, the user will be shown a results message that will be dependent on the score. At the bottom of the results section, they are shown buttons to go to the home screen or to pick another era from the list.

    function finalScore () {
    const finalScoreEl = document.getElementById("final-score");

    if (score === 15) {
        finalScoreEl.innerHTML = `
        <strong>Your final score is ${score} / 15!</strong>

        <p>Okay, wait a minute... you got a perfect score?! Are you kidding us right now?!</p>
        
        <p>This wasn't just knowing the answers <em>"All Too Well"</em>; it was <em>"(Mr) Perfectly Fine"</em> taken to an entirely new level! You didn't just pass; you absolutely conquered that quiz like it was <em>"The Great War"</em>, and you were the only one left standing.</p>
        
        <p>You're not just a Swiftie; you're a certified <em>"Mastermind!"</em> It's as if you know the lyrics better than Taylor Swift herself sometimes. This is your moment to really make the whole place shimmer!</p>
        
        So, to the quiz champion, CONGRATULATIONS! You've officially proven you're the ultimate, undisputed, 100%-scoring quiz legend. Go celebrate like you just won a Grammy; you absolutely earned it.`;
    }
    else if (score >= 12 && score <= 14) {
        finalScoreEl.innerHTML = `
        <strong>Your final score is ${score} / 15!</strong>

        <p>Did you have <em>"The Lucky One"</em> on repeat while studying, or are you just a <em>"Mastermind</em> when it comes to all things Taylor? Because you absolutely slayed that quiz like it was a surprise album drop!</p>
        
        <p>We bet you were feeling <em>"Fearless"</em> walking into that, and now you're probably singing <em>"Long Live"</em> at the top of your lungs. You didn't just know the answers, you knew them <em>"All Too Well."</em></p>
        
        <p>Consider this your <em>"Picture to Burn"</em> moment for anyone who doubted your Swiftie knowledge.</p> 
        
        <p>You've officially entered your champion Era, and honestly, it looks <em>"Gorgeous"</em> on you!</p>
        
        Congratulations, you magnificent, lyrical genius! Now, if you'll excuse us, we're just wondering if you'll ever let us in on your <em>"Mastermind"</em> strategy, because we're not as cool as you.`;
    }

       else if (score >= 9 && score <= 11) {
        finalScoreEl.innerHTML = `
        <strong>Your final score is ${score} / 15!</strong>

        <p>Okay, so someone just jumped into that Taylor Swift quiz, and you know what? That's what truly matters! You showed up, gave it your all, and you're still a brilliant Swiftie.</p>
        
        <p>Sometimes, you don't know all the little secret Easter eggs, and honestly, that's totally okay! The whole point is to have fun. You just gotta <em>"Shake It Off"</em> when it comes to the score and remember what a dedicated fan you are.</p>
        
        Don't even sweat it! There's always a <em>"Begin Again"</em> moment for the next quiz, and we know you'll absolutely crush it. Congratulations on playing along!`;
    }

     else if (score >= 4 && score <= 9) {
        finalScoreEl.innerHTML = `
        <strong>Your final score is ${score} / 15!</strong>
        
        <p>Well, that quiz was certainly a <em>"Bad Blood"</em> moment for some of us, wasn't it? But honestly, who cares if you didn't ace every single question, the important thing is you showed up, you played, and you still have an <em>"Invisible String"</em> connecting you to all things Taylor!</p>
      
        <p>Maybe you just had a <em>"Glitch"</em> on a few answers, or perhaps you were too busy jamming to the music in your head to focus on the trivia. Either way, there's absolutely no need to </em>"Shake It Off"</em>.</p>
    
        Consider this just a little <em>"Long Story Short"</em> moment. It's all about the fun, plus, now you have even more reason to dive back into the discography. You can always <em>"Begin Again"</em> with another quiz!`;
    }

     else if (score >= 1 && score <= 4) {
        finalScoreEl.innerHTML = `
        <strong>Your final score is ${score} / 15!</strong>
        
        <p>Okay, so maybe that quiz was more of a <em>"Death By A Thousand Cuts"</em> than a <em>"Love Story"</em> for you, but hold up! You got a few right, and in the grand scheme of things, that's like finding a secret message in one of Taylor's album booklets - a small victory, but a victory nonetheless!</p>
        
        <p>No need to <em>"Shake It Off"</em> in despair, because seriously, the fact that you even showed up and faced the music makes you a <em>"Fearless"</em> fan in our book. Maybe you were just too busy feeling <em>"22"</em> and having a blast to remember every deep cut, and that's perfectly okay!</p>
        
        Consider this just a <em>"Long Story Short"</em> moment on your Swiftie journey. It's not about being a <em>"Mastermind"</em> every time, it's about the shared love for the music. Plus, now you've got a whole new set of lyrics to dive into for next time. You can always <em>"Begin Again"</em> with another quiz!`;
    }

        else if (score === 0) {
        finalScoreEl.innerHTML = `
        <strong>Your final score is ${score} / 15!</strong>
        
        <p>Okay, so you just took a Taylor Swift quiz and landed squarely in a <em>"Blank Space"</em> when it came to the answers, huh? You know what? That's not a loss; that's just a clean slate ready to be filled with all the amazing Taylor knowledge you're about to gain!</p>
        
        <p>There's absolutely no need to <em>"Shake It Off"</em> in despair because, honestly, showing up and giving it a shot is a <em>"Fearless"</em> move in itself. Maybe you were just too busy feeling <em>"22"</em> and having a good time, or perhaps you were already mentally planning your next eras fit!</p>
        
        <p>Consider this just a <em>"Long Story Short"</em> moment. The real win isn't about the score; it's about the pure, unadulterated love for Taylor's music that brought you to the quiz in the first place.</p> 

        You're still connected by an <em>"Invisible String"</em> to this fandom. Plus, now you have all the songs to re-listen to and all the lyrics to learn! We're confident that next time, you'll be singing a different tune and going <em>"Clean"</em> on that scoreboard!`;
    }
    }

## Testing

### Manual Testing
Page | Expected Result | Actual Result | Notes
--- | --- | --- | ---
Opening | On clicking "Lets Go", user is taken directly to the opening instructions page. The button highlights purple when the user hovers over the button | On clicking "Lets Go!" the user is taken to the opening insructions page. On mobile the button does not turn purple - this is expected as hover is not an option on mobile. On laptop/deskop the button turns purple. On both mobile and laptop/desktop the user is taken to the opening instructions page | All features responding as intended
Opening Instructions | The user is immediately taken to the instructions page after clicking "Lets Go". The instructions are visible and on small screen mobiles may require the user to scroll to the bottom to press the "It's been a long time coming" button. On hovering over this button, the button turns purple and once clicked the user is taken to the "Choose Your Era" section of the game | The user is taken to the instructions page. On small mobile screens (320px) the user is usually required to scroll to the bottom of the instructions to access the "It's been a long time coming" button. On more modern screens and wider screens this is not the case and the instructions and button are clealry visible without scrolling. On mobile the "It's been a long time coming" button does not turn purple - again as with the opening page hover isn't an option for mobile devices. On laptop/deskop the button turns purple. On both mobile and desktop the user is taken to the "Choose Your Era" section | All features responding as intended
Choose Your Era | The user is taken to the "Choose Your Era" section. On mobile and tablet screens the user can scroll down the page to reach the bottom of the list. On laptop and wider screens the "Choose Your Era" interface flex's into two equally matched colums to better fill the screen space. On hovering on any of the buttons the button will turn purple. The user can choose whichever era they wish and on clicking that relevant era, the game for that era will launch. | On clicking "It's been a long time coming" the user is taken to the "Choose Your Era" interface. On mobiles and tablets this is show as a long list and the user is required to scroll to the bottom if they wish to launch some of the last games. On laptop/desktop, the interface flexes into two equally matched columns which sit centrally on the page. On mobile, none of the buttons turn purple - as again with the previous pages, hover is not an option for mobile. On laptop/desktop, all buttons when hovered over turn purple indicating to the user what game they are about to launch. Clicking any of the eras does then take the user to the specific game for that era. | All features responding as intended
Quiz | On choosing which era they would like to play, the user is taken to the quiz space. The quiz space has a space at the top of the quiz section which shows the user the name of the game they chose (ie Fearless, Debut, Lover). This updates depending on which game is chosen. The lyric is then shown underneath this and underneath this there are four options which the user can choose from. On mobile and tablet screens the options show in list, on laptop/desktop screens the options flex into two columns of two. On choosing an answer all of the buttons become inactive so that the player cannot make another option. Correct answers are highlighted in green. If the player submits an incorrect answer, the incorrect answer turns red, and the correct answer turns green. After 1.5 seconds, the question automatically moves to the next question which should be a random assortment from the specified array and the buttons reset to allow the user to make another guess. If the answer is correct, the score will be incremented and will go up by 1. This process continues until 15 questions have been answered. Underneath the quiz section, two buttons should show. One should be a home button which will take the user back to the welcome page. The second button should be the "Another Era" button. On clicking this button, the user is taken back to the "Choose Your Era" section and the quiz resets the score to 0 so the user can start another quiz | On choosing which era they would like to play the user is shown the quiz space. The user sees the name of the game they are playing (ie Fearless, Debut, Reputation). This will update depending on which game they have chosen to load. The user sees the question immediately underneath this and the question option buttons underneath that. On mobiles and tablets the option buttons show as a list, on laptop/desktops the options stack into two colums of two of equal width. On clicking any of the options, the buttons immediately become inactive so no user can provide an additional answer. If the answer is correct, the answer option turns green and the score is incremented below. If the answer is incorrect, the answer provided turns red and the correct answer is shown in green. The score does not increment. The question automatically moves to the next question after 1.5 seconds and all buttons reset to allow the user to provide a new answer for the next question. Underneath the quiz button, the user can see two buttons, one home button which takes the user back to the opening page. The second button is the "Another Era" button, and on clicking this the user is taken to the "Choose Your Era" section. When the user clicks this second button, the score is reset to 0 so that they can choose another quiz | All features responding as intended
Results | After completing 15 questions the user is shown their final score and a message that is specific to the score. This message will change dependent on how good or bad the score is. Underneath the score there is a "Home" button. On clicking this button the user is taken to the opening page. The button highlights purple on hover | After completing 15 questions the user is shown their final score. The message they recieve is dependent on their score. Underneath the score, there is a "Home" button, and on clicking this button the user is taken to the opening page. On mobile/tablet, the button does not turn purple when hovered over as hover is not an option for mobiles. On laptops/desktops the button turns purple when hovered over | All features responding as intended

### Browser Testing

### Responsive Testing
I used Blisk to test cross compatability across multiple screen sizes and types.

Device | Opening | Instructions | Choose Era | Quiz | Result Page | Notes
--- | --- | --- | --- | --- | --- | ---
Google Pixel 8 | Scaling correctly, text box floating centrally on the browser, margins left and right correct. Button is clearly visible to initiate game, background is not warping and is clear. Fonts are showing up correctly | Logo wrapping correctly on smller screen, padding correct. Button visible on screen and does not need to be scrolled to | Choose your Era clearly visible, buttons all have correct amount of padding, user is required to scroll to reach bottom of game selection | Quiz space floating centrally on browser, all fonts correctly displaying, all buttons have adequate padding to account for larger fingers. Additional buttons are accessible and clearly visible and wrapping correctly for smaller screen. Colour formating on correct/incorrect answers working | Result message clearly floating centrally, buttons displaying correctly and are not squashed. | No issues, all showing as correct across page.
iPhone 16 | Scaling correctly, text box floating centrally on the browser, margins left and right correct. Button is clearly visible to initiate game, background is not warping and is clear. Fonts are showing up correctly | Logo wrapping correctly on smller screen, padding correct. Button visible on screen and does not need to be scrolled to | Choose your Era clearly visible, buttons all have correct amount of padding, user is required to scroll to reach bottom of game selection | Quiz space floating centrally on browser, all fonts correctly displaying, all buttons have adequate padding to account for larger fingers. Additional buttons are accessible and clearly visible. Colour formating on correct/incorrect answers working | Result message clearly floating centrally, buttons displaying correctly and are not squashed. | No issues, all showing as correct across page.
iPhone SE | Scaling correctly, but text box sitting lower on the screen than intended due to screen size. Buttons clearly visible, background is clear and not warping. | Scaling correctly, but user is required to scroll to get to read instructions compared to newer/larger models. Button clearly visible | Scaling correctly but user required to scroll through full game list. | Scaling correctly but user required to scroll down to actually see game quiz, buttons and additional buttons. | Result message clearly displayed, buttons visible and displaying correctly so do not look squashed | Generally all scaling was correct, but older and smaller screen requires more user interaction (ie scrolling) to use site.
iPad Mini | Scaling correctly, text box floating centrally on the browser, margins left and right correct. Button is clearly visible to initiate game, background is not warping and is clear. Fonts are showing up correctly | Scaling correctly, button is clearly displayed, fonts displaying correctly. | Scaling correctly, all buttons visible and no requirement for scrolling. All buttons showing correctly on one line | Scaling correctly, quiz space floating centrally, all buttons easily viewed and accessible at all times | Scaling correctly, result message clearly displayed, buttons visible and displaying correctly | No issues, all showing as correct across pages
iPad Pro 12 | Scaling correctly, but text box floating a little lower on browser than intended, margins left and right correct. Button clearly viible to initiate game. | Scaling correctly, buttons clearly displayed, fonts displaying correctly. | Scaling correctly, all buttons visible and no requirement for scrolling. All buttons showing correctly on one line | Scaling correctly, quiz space floating centrally, all buttons easily viewed and accessible at all times | Scaling correctly, result message clearly displayed, buttons visible and displaying correctly | No issues, all showing as correct across pages
Standard Laptop | Scaling correctly, text box floating centrally on the browser, margins left and right correct. Button is clearly visible to initiate game, background is not warping and is clear. Fonts are showing up correctly | Scaling correctly, button is clearly displayed, fonts displaying correctly. | Choose your Era box floating centraly, padding adequate to allow additional breathing room. All buttons clearly visible | Scaling correctly, quiz space floating higher on the screen, all buttons easily viewed and accessible at all times | Scaling correctly, result message clearly displayed, buttons visible and displaying correctly | No issues, all showing as correct across pages
Widescreen Desktop | Scaling correctly, text box floating centrally on the browser, margins left and right correct. Button is clearly visible to initiate game, background is not warping and is clear. Fonts are showing up correctly | Scaling correctly, button is clearly displayed, fonts displaying correctly. | Choose your Era box floating centraly, padding adequate to allow additional breathing room. All buttons clearly visible | Scaling correctly, quiz space floating centrally, all buttons easily viewed and accessible at all times | Scaling correctly, result message clearly displayed, buttons visible and displaying correctly | No issues, all showing as correct across pages


### Lighthouse Testing

The site was tested using Lighthouse across both mobile and desktop devices. Scores for these can be found below:

#### Mobile
#### Desktop

### HTML Validation

Additionally, the site was tested using the HTML validator, w3.org. No errors were returned

### CSS Validation

The site was also further tested using the CSS validator, also through w3.org. No errors were returned. 

### JShint Validation

To check the validity of the JavaScript, the script itself was ran through JShint. JShint returned warnings which were rectified by the addition of the following instructions into the script at the top:

/* use strict */
/* jshint esversion: 6 */
/* jshint -W033 */

The one remaining warning can be found below - on further investiagation I decided to leave the script as is with the error in place. This was due to the following reasons:
* Time constraints of the project
* Scope of the project
* The fact that the project was running perfectly well with this issue remaining.

JShint also picked up the following variables were not being used:
* pickEra
* quizSpace
* answers

These variables were remove following testing which determined that they had no impact to the running of the game.

### WAVE Validation

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