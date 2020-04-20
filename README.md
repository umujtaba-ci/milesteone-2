# The Classic Snake Game

This milestone project was used to build a website to provide an interactive game to both desktop and mobile users. The game chosen was the Classic Snake Game. This game is an arcade and mini game favourite and will allow users to spend free time in an ad free environment. The game will offer multiple modes to cycle between different gameplay styles. The game will also allow you to track your score as you complete each round.

## UX

The game is going to be built on a one page website using html and css. The game engine is going to be built using the interactive powers of javascript. The game will be centered to the screen and will be responsive from small screened older mobile devices to a maximum of 1000px easily displayable on the most recent desktop devices. THe game will also have on screen button below the canvas to allow for mobile touch screen support.

The website will have a simple black and white theme except in the game itself. The background, buttons, game menu, and game over menu will all follow the black and white theme. This will provide clear contrast from the game and maintain focus on the game.

The menu will be the first thing that shows up allowing users to pick from 1 of 2 game modes to begin. Futrue game modes can easily be added due to the modular nature of the game. One the game comes to an end, the user will be shown their score and can redirect back to the main game menu.

### User Stories

John visits the website to play the game on desktop. John is right handed and is able to use the arrow keys to play. John has a good day.

Jane visits the website to play the game on desktop. Jane is left handed and is able to use the ASDW keys to play. Jane has a good day.

Jazz visists the website to play the game mobile. Jazz can use the on screen buttons to play. Jazz has a good day.

## Features

### Game Menu

The game menu allows the users to pick between the available game modes. They can do so by pressing either instances of 1 or 2 on their keyboard and by using the 1 and 2 on screen buttons. The game instructions are responsive and will get smaller to adapt to a mobile environment.

### Game 

The game was built using javascript and everything is seperated in appropriate functions to provide a very modular functionality. The game can easily be ammended by adding/removing/changing the loop of functions. Currently there are two game modes and the loop has only one difference, one game mode uses a hitBorderCheck to see if the snake has hit the edge to end the game whereas the other uses a endlessBorderCheck to see if the snake hits the border to make it reappear on the opposite end of the canvas. 

The game uses CSS selectors to attain the width and height of the canvas as the game had to be built responsive. The responsive nature of the game follows throughout the game as most functions and varaibles get their value directly or indirectly from the css height/width.

The game uses both click and keypress event listeners to ensure both the keyboard and on screen buttons can function properly. In order to do so many event listeners had to be added and removed at appropriate times to ensure they do not interfere with the functionality of other aspects of the application.

The snake values are stored inside an array as objects containing of both x and y values. Each time the snake eats a rat, that position is appended to the array. This allows the snake to grow as it continues to eat. The snake is comprised of three sepearte images. The head, tail, and multiple body elements between the head and tail as the snake grows. 

The food is randomnly generated using a math random function and the available space on the screen determined by the canvas width and height. The food generator also checks if it interferes with the current position of the snake to make sure it does not populate in an incorrect spot. 

When the keyboard buttons or on screen buttons are triggered, the direction variable is updated. This change is realized in the next interval instance when the position is updated by adding the direction to it. This process continues until the next direction input is provided. The game has a check to ensure you cannot make a 180 degree change in direction as that is not natural. 

The game ends when the snake eats itself and in order to ensure that, the position variable is checked against each element of the snaek body. Ths is done using a for loop that cycles through the x and y values of each snake body element and compares it to the position x and y coordinates.

A constant refresh of the game menu was implemented to ensure the background image loads even it takes a few seconds to load all the images. 

A prevent default instruction was provided to the keyboard buttons to make sure the screen does not scroll when using the arrow keys. 

### Game Over

When the game is over, the score is displayed centered on the top. THe game also loads instuctions to click any key to continue. Using both click and keypress event listeners the game menu can be reached by pressing any key on the keyboard or clicking any of the on screen buttons.


### Features Left to Implement

I plan on changing the user interfae to show the time elapsed and current score constantly. I also want the buttons to only show up when neccessary on mobile devices during portrait orientation. I also want to add mutliple game modes which would included a timed game, a game with different foods which have different score values, and possibly one that has dangerous items to avoid.

## Technologies used

HTML - Used to build basic content of the website
CSS - Used for complete styling of the website 
JavaScript - Used to build the entire game

## Testing

The testing process was a constant process. As each section was reaching its end, the website would be tested again to ensure that nothing "broke". If a bug was realized, it was fixed first before moving on to the next section. This method makes it a lot easier to find the bug as opposed to having to comb through the entire website.

The webstie was throuhghly tested in multiple browsers (Firefox, Chrome, Edge, Safari, and IE). The website responsiveness acted correctly in all browsers.

The website was also observed in many different mobile and tablet resolution using Google Developer Tools, again acting as expected. 

The website was tested in W3C HTML & CSS validators and no errors were realized.

## Deployment

The website was pushed to github using gitpod. Once the final version of the website was committed and pushed, the website was hosted using gitpage. 

Please find the live website here: https://umujtaba-ci.github.io/milesteone-2/

Currently the live version and development versions are identical. 

## Credits

### Content

All text content was created by myself. No content was copied from elsewhere.

### Media 

Snake images were made myself.

Button icons and the rat images were attained from www.flaticon.com with a free license.

The snake menu image was foung on (www.pexels.com) again with a free personal license.

### Acknowledgements

Code Institute - Learning from the code institute program were applied
W3 Schools - Used as a constant reference for Javascript code
Watched the following tutorials to understand different logics: 
https://www.youtube.com/watch?v=cZ0IPkF85mY
https://www.youtube.com/watch?v=21eSpMtJwrc
https://www.youtube.com/watch?v=cZ0IPkF85mY
https://www.youtube.com/watch?v=-XrCaWBwLW4
