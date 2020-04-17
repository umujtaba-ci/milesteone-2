const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

canvas.width = canvas.getAttribute('width');
canvas.height = canvas.getAttribute('height');

//const menuBackground = new Image();
//menuBackground.src = "assets/img/menuBackground.jpg";

//const gameBackground = new Image();
//gameBackground.src = "assets/img/gameBackground.jpg";

const gameFood = new Image();
gameFood.src = "assets/img/gameFood.png";

const snakeHead = new Image();
snakeHead.src = "assets/img/snakeHead.png";

const snakeBody = new Image();
snakeBody.src = "assets/img/snakeBody.png";

const snakeTail = new Image();
snakeTail.src = "assets/img/snakeTail.png";

//const gameOverBanner = new Image();
//gameOverBanner.src = "assets/img/gameOverBanner.jpg";

const scale = 10;

let direction = {x:0, y:0};
let position = {x:25, y:25};
let snake = [{x:25, y:25}];
let foodPos;
var interval;

function keyPress(e) {
    switch(e.keyCode) {
        case 37:
        case 65: 
            direction = {x:-1, y:0};
            break;
        case 39:
        case 68: 
            direction = {x:1, y:0};
            break;
        case 38:
        case 87: 
            direction = {x:0, y:-1};
            break;
        case 40:
        case 83: 
            direction = {x:0, y:1};
            break;
    }
}

function generateFood() {
    newX = Math.floor(Math.random() * 50);
    newY = Math.floor(Math.random() * 50);
    foodPos = {x:newX, y:newY};

    for (let element of snake) {
        if(foodPos.x == element.x && foodPos.y == element.y) {
            generateFood();
            break;
        }
    }
}

function clearBoard() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawGameBackground() {
    context.drawImage (gameBackground, 0, 0);
}

function drawSnake() {
    
    for (let element in snake) {
        if (element == 0) {
            context.drawImage (snakeHead, snake[element].x * scale, snake[element].y * scale);
        } else if (element == (snake.length - 1) && snake.length > 1) {
            context.drawImage (snakeTail, snake[element].x * scale, snake[element].y * scale);
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
    if (position.x < 0 || position.x > canvas.width/scale || position.y < 0 || position.y > canvas.height/scale) {
        gameOver();
    }
}

function gameOver() {
    clearInterval(interval);
    //context.drawImage (gameOverBanner, 0, 200);
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
    //drawGameBackground();
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




