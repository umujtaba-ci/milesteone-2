const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

canvas.height = canvas.getAttribute('height');
canvas.width = canvas.getAttribute('width');

const gameBackground = new Image();
gameBackground.src = "../images/gameBackground.jpg";

const gameFood = new Image();
gameFood.src = "../images/gameFood.jpg";

const snakeHead = new Image();
snakeHead.src = "../images/snakeHead.jpg";

const snakeBody = new Image();
snakeBody.src = "../images/snakeBody.jpg";

const snakeTail = new Image();
snakeTail.src = "../images/snakeTail.jpg";

const scale = 10;

let direction = {x:0, y:0};
let position = {x:25, y:25};
let snake = [{x:25, y:25}];
let foodPos;

function keyPress(e) {
    switch(e.keycode) {
        case: 37
        case: 65
            direction = {x:-1, y:0};
            break;
        case: 39
        case: 68
            direction = {x:1, y:0};
            break;
        case: 38
        case: 87
            direction = {x:0, y:-1};
            break;
        case: 40
        case: 83
            direction = {x:0, y:1};
            break;
    }
}

function generateFood() {
    newX = Math.floor(Math.random() * 50);
    newY = Math.floor(Math.random() * 50);
    foodPos = {newX, newY};

    for (let element of snake) {
        if(food.x == element.x & food.y == element.y) {
            generateFood();
            break;
        }
    }
}

fucntion drawGameBackground() {
    contect.drawImage (gameBackground, 0, 0);
}

function drawSnake {
    
    for (let element in snake) {
        if (element == 0) {
            context.drawImage (snakeHead, snake[element].x, snake[element].y)
        } else if (element == snake.length - 1) {
            context.drawImage (snakeTail, snake[element].x, snake[element].y)
        } else {
            context.drawImage (snakeTail, snake[element].x, snake[element].y)
        }
    }
}

function drawFood() {
    context.drawImage (gameFood, foodPos.x, foodPos.y)
}

function loop() {

    



}

function startGame() {

}






