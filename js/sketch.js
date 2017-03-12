var GRID_SIZE = 20;
var CANVAS_X = 750;
var CANVAS_Y = 500;
var FRAME_RATE = 9;

var snake;
var apple;


var mic = new p5.SpeechRec();
mic.continuous = true;
mic.interimResults = true;


function randomPosition() {
    var x = floor(random((CANVAS_X - CANVAS_X % GRID_SIZE) / GRID_SIZE));
    var y = floor(random((CANVAS_Y - CANVAS_Y % GRID_SIZE) / GRID_SIZE));
    return createVector(x, y);
}

function setup() {
    createCanvas(CANVAS_X - CANVAS_X % GRID_SIZE, CANVAS_Y - CANVAS_Y % GRID_SIZE);
    frameRate(FRAME_RATE);

    snake = new Snake(CANVAS_X / GRID_SIZE * 0.5 - 1, CANVAS_Y / GRID_SIZE * 0.50 - 1, "green");
    apple = new Apple();
    fill(255);

    mic.onResult = parseResult;
    mic.start();
}

function parseResult() {
    var mostrecentword = myRec.resultString.split(' ').pop();
    if(mostrecentword.indexOf("left")!==-1) {
        snake.face(-1, 0);
    } else if(mostrecentword.indexOf("right")!==-1) {
        snake.face(1, 0);
    } else if(mostrecentword.indexOf("up")!==-1) {
        snake.face(0, -1);
    } else if(mostrecentword.indexOf("down")!==-1) {
        snake.face(0, 1);
    }
    console.log(mostrecentword);
}


function draw() {
    background("#98fb98");

    if (snake.eats(apple)) {
        apple = new Apple();
        snake.grow();
    }

    snake.update();
    snake.checkStatus();
    snake.show();
    apple.show();
    if (snake.dead) {
        fill(0);
        text("You lost! Refresh (f5) to play again.", 20, 20);
        exit();
    }
}

function keyPressed() {

    if (key === 'W') {
        snake.face(0, -1);
    } else if (key === 'S') {
        snake.face(0, 1);
    } else if (key === 'A') {
        snake.face(-1, 0);
    } else if (key === 'D') {
        snake.face(1, 0);
    }

    if (keyCode === UP_ARROW) {
        snake.face(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.face(0, 1);
    } else if (keyCode === LEFT_ARROW) {
        snake.face(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        snake.face(1, 0);
    }


}
