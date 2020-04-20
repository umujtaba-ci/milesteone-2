const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');
const style = getComputedStyle(canvas);

const canvasWidth = parseInt(style.width);
canvas.width = canvasWidth;
const canvasHeight = parseInt(style.height);
canvas.height = canvasHeight;

const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const oneBtn = document.getElementById("one");
const twoBtn = document.getElementById("two");

const menuBackground = new Image();
menuBackground.src = "assets/img/menuBackground.png";

const gameBackground = new Image();
gameBackground.src = "assets/img/gameBackground.png";

const gameFood = new Image();
gameFood.src = "assets/img/gameFood.png";

const snakeHeadX = new Image();
snakeHeadX.src = "assets/img/snakeHeadX.png";

const snakeHeadY = new Image();
snakeHeadY.src = "assets/img/snakeHeadY.png";

const snakeBody = new Image();
snakeBody.src = "assets/img/snakeBody.png";

const snakeTailX = new Image();
snakeTailX.src = "assets/img/snakeTailX.png";

const snakeTailY = new Image();
snakeTailY.src = "assets/img/snakeTailY.png";

const gameOverBanner = new Image();
gameOverBanner.src = "assets/img/gameOverBanner.png";

const scale = 25;
const tileCount = canvasWidth/scale;
const center = tileCount/2;
let direction = {x:0, y:0};
let position = {x:center, y:center};
let snake = [{x:center, y:center}];
let foodPos;
let interval;
let menuChoice;

function menuPress(e) {
    switch(e.keyCode) {
        case 49:
        case 97: 
            menuChoice = 1;
            startGame();
            break;
        case 50:
        case 98: 
            menuChoice = 2;
            startGame();
            break;
    }
}

function keyPress(e) {
    switch(e.keyCode) {
        case 37:
        case 65: 
            if (direction.x !== 1) {
                direction = {x:-1, y:0};
            }
            break;
        case 39:
        case 68: 
            if (direction.x !== -1) {
                direction = {x:1, y:0};
            }
            break;
        case 38:
        case 87: 
            if (direction.y !== 1) {
                direction = {x:0, y:-1};
            }
            break;
        case 40:
        case 83: 
            if (direction.y !== -1) {
                direction = {x:0, y:1};
            }
            break;
    }
}

function generateFood() {
    newX = Math.floor(Math.random() * tileCount);
    newY = Math.floor(Math.random() * tileCount);
    foodPos = {x:newX, y:newY};

    for (let element of snake) {
        if(foodPos.x == element.x && foodPos.y == element.y) {
            generateFood();
            break;
        }
    }
}

function clearBoard() {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
}

function drawGameBackground() {
    context.drawImage (gameBackground, 0, 0, canvasWidth, canvasHeight);
}

function drawSnake() {
    
    for (let element in snake) {
        if (element == 0) {
            if (direction.x == 0) {
                context.drawImage (snakeHeadY, snake[element].x * scale, snake[element].y * scale);}
            else if (direction.y == 0){
                context.drawImage (snakeHeadX, snake[element].x * scale, snake[element].y * scale);}
            ;
        } else if (element == (snake.length - 1) && snake.length > 1) {
            if (direction.x == 0) {
                context.drawImage (snakeTailY, snake[element].x * scale, snake[element].y * scale);}
            else if (direction.y == 0) {
                context.drawImage (snakeTailX, snake[element].x * scale, snake[element].y * scale);}
            ;
        } else {
            context.drawImage (snakeBody, snake[element].x * scale, snake[element].y * scale);
        }
    }
}

function drawFood() {
    context.drawImage (gameFood, foodPos.x * scale, foodPos.y * scale);
}

function eatSelfCheck() {
    if (snake.length > 1) {
        for (let element of snake) {
            if (position.x == element.x && position.y == element.y) {
                gameOver();
            }
        }
    }
}

function hitBorderCheck() {
    if (position.x < 0 || position.x > tileCount || position.y < 0 || position.y > tileCount) {
        gameOver();
    }
}

function endlessBorderCheck() {
    if (position.x < 0 ) {
        position.x = tileCount;
        console.log("1");
    } else if (position.x >= tileCount) {
        position.x = 0;
        console.log("2");
    } else if (position.y < 0 ) {
        position.y = tileCount;
        console.log("3");
    } else if (position.y >= tileCount) {
        position.y = 0;
        console.log("4");
    }
}

function gameOver() {
    document.removeEventListener("keydown", keyPress);
    upBtn.removeEventListener("click", moveUp);
    downBtn.removeEventListener("click", moveDown);
    leftBtn.removeEventListener("click", moveLeft);
    rightBtn.removeEventListener("click", moveRight);
    clearInterval(interval);
    context.drawImage (gameOverBanner, 0, (canvasWidth/2-150), canvasWidth, 300);
    direction = {x:0, y:0};
    position = {x:center, y:center};
    snake = [{x:center, y:center}];
    document.addEventListener("keydown", gameMenu);
    upBtn.addEventListener("click", gameMenu);
    downBtn.addEventListener("click", gameMenu);
    leftBtn.addEventListener("click", gameMenu);
    rightBtn.addEventListener("click", gameMenu);
    oneBtn.addEventListener("click", gameMenu);
    twoBtn.addEventListener("click", gameMenu);
}

function eatFoodCheck() {
    if (foodPos.x == position.x && foodPos.y == position.y) {
        snake.unshift(foodPos);
        generateFood();
    }
}

function moveUp() {
    direction = {x:0, y:-1};
}

function moveDown() {
    direction = {x:0, y:1};
}

function moveLeft() {
    direction = {x:-1, y:0};
}

function moveRight() {
    direction = {x:1, y:0};
}

function oneOption() {
    menuChoice = 1;
    startGame();
}

function twoOption() {
    menuChoice = 2;
    startGame();
}

function updatePosition() {
    position.x += direction.x;
    position.y += direction.y;
}

function updateSnake() {
    snake.unshift({...position});
    snake.pop();
} 

function loopDeadly() {
    clearBoard();
    drawGameBackground();
    drawSnake();
    drawFood();
    updatePosition();
    eatSelfCheck();
    hitBorderCheck();
    eatFoodCheck();
    updateSnake();
}

function loopEndless() {
    clearBoard();
    drawGameBackground();
    drawSnake();
    drawFood();
    updatePosition();
    eatSelfCheck();
    endlessBorderCheck();
    eatFoodCheck();
    updateSnake();
}

function startGame() {
    clearInterval(menuInterval);
    document.removeEventListener("keydown", menuPress); 
    oneBtn.removeEventListener("click", oneOption);
    twoBtn.removeEventListener("click", twoOption);
    document.addEventListener("keydown", keyPress);
    upBtn.addEventListener("click", moveUp);
    downBtn.addEventListener("click", moveDown);
    leftBtn.addEventListener("click", moveLeft);
    rightBtn.addEventListener("click", moveRight);
    
    generateFood();
    if (menuChoice == 1) {
        interval = setInterval(loopDeadly, 100);
    } else if (menuChoice == 2) {
        interval = setInterval(loopEndless, 100);
    }
}

function gameMenu() {
    document.removeEventListener("keydown", gameMenu);
    upBtn.removeEventListener("click", gameMenu);
    downBtn.removeEventListener("click", gameMenu);
    leftBtn.removeEventListener("click", gameMenu);
    rightBtn.removeEventListener("click", gameMenu);
    oneBtn.removeEventListener("click", gameMenu);
    twoBtn.removeEventListener("click", gameMenu);
    context.drawImage (menuBackground, 0, 0, canvasWidth, canvasHeight);
    document.addEventListener("keydown", menuPress);
    oneBtn.addEventListener("click", oneOption);
    twoBtn.addEventListener("click", twoOption);
}

let menuInterval = setInterval(gameMenu, 100);



