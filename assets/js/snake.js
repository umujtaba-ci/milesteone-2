const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

canvas.height = canvas.getAttribute('height');
canvas.width = canvas.getAttribute('width');

const gameBackground = new Image();
gameBackground.src = "../images/gameBackground.jpg";

const scale = 20;

let direction = {x:0, y:0};
let position = {x:25, y:25};
let snake = [{x:25, y:25}];
let food;


function keyPress(button) {
    switch(button.keycode) {
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

}

function loop() {

}

function startGame() {

}






