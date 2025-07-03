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

## Opening instructions section
Once the user has clicked the "lets go!" button, they are taken to a set of small instructions which explain to the user exactly how to play the game. The copy has been written to be informal and friendly and should illicit a positive user experience. When the user is ready to choose the level they will be playing at, they must click "It's been a long time coming...". Upon clicking this, "it's been a long time coming clicked" is logged to the console and the user is taken to the Choose Era section

## Choose Era section
At this point the user is given the opportunity to choose which game they would like to choose based on their favourite album. In order to make the section as readable as possible for smaller screens (up to 375px) the Era's options are scrollable. For desktop screens and larger, the list splits into two columns to save space. Once the user has chosen which game they would like to play, the user will click the button and the following message is logged to the console: "clicked era (game title)" followed by "loading questions for (game title)"

## Quiz section
This is now the game part of the site. Upon choosing the game they would like to play the user is greeted with a screen which shows the following:
* The title of the game they chose - ie Fearless, Debut
* A lyric from the album related to that game
* Four options to choose from
* A score marker
* Additional buttons on the bottom of the screen which allow the user to escape the game, return to the instructions or choose another game to play. 

Once the user has chosen which button they want to choose for their answer they are immediately provided visual feedback to say if they have gotten the answer wrong or right. Correct answers turn the button green after 1.5 seconds, incorrect answers turn the button red after 1.5 seconds, all other buttons are frozen whilst this happens so the user cannot spam any buttons. If the user provides an incorrect answer, the correct answer will turn green at the same time. Correct answers will increment the score below the quiz. Incorrect answers will not increment the score. The quiz will automatically provide a new lyric after 1.5 seconds until it runs through 15 randomised lyrics.

## Result section
Once the quiz has run through 15 questions, the user will be shown a results message that will be dependent on the score. At the bottom of the results section, they are shown buttons to go to the home screen or to pick another era from the list.

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