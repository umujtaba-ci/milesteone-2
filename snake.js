const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

const canvasWidth = canvas.getAttribute('width');
const canvasHeight = canvas.getAttribute('height');


//const menuBackground = new Image();
//menuBackground.src = "assets/img/menuBackground.jpg";

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
const tileCount = canvas.width/scale;
const center = tileCount/2;

let direction = {x:0, y:0};
let position = {x:center, y:center};
let snake = [{x:center, y:center}];
let foodPos;
var interval;

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
    context.clearRect(0, 0, canvasWidth, canvas.height);
}

function drawGameBackground() {
    context.drawImage (gameBackground, 0, 0);
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

function gameOver() {
    clearInterval(interval);
    context.drawImage (gameOverBanner, 0, (canvasWidth/2-100), canvasWidth, 200);
}

function eatFoodCheck() {
    if (foodPos.x == position.x && foodPos.y == position.y) {
        snake.unshift(foodPos);
        generateFood();
    }
}

function updatePosition() {
    position.x += direction.x;
    position.y += direction.y;
}

function updateSnake() {
    snake.unshift({...position});
    snake.pop();
} 

function loop() {
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

function startGame() {
    document.addEventListener("keydown", keyPress);
    generateFood();
    interval = setInterval(loop, 100);
}

startGame();




