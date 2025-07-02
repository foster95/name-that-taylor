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

### Should have
* As a fan of Taylor and a user of the game I want the option to challenge myself to harder levels within each Era

### Could have
* As a user and player of the game, I would like an element of time pressure and to see a countdown clock which resets at every question
* As a user and player of the game, I would like the quiz to change colour palettes depending on which game I choose to run.

The full project board list can be found by clicking here

## Design
Name that Song - Taylor's Version has been designed as a single webpage, with a series of javascript instructions ensuring the user can move through each section of the quiz. It has been designed to be compact, simple to use and easy to navigate with an opening section, a instructions section, a choose your game section, a quiz section and a final result section.

### Wireframes

All wireframes were created using Balsamiq

![Mobile Wireframe 1](https://github.com/foster95/name-that-taylor/blob/main/assets/images/balsamiq-wire-frame-mobile-1.png)
![Mobile Wireframe 2](https://github.com/foster95/name-that-taylor/blob/main/assets/images/balsamiq-wire-frame-mobile-2.png)
![Mobile Wireframe 3](https://github.com/foster95/name-that-taylor/blob/main/assets/images/balsamiq-wire-frame-mobile-3.png)

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