var BUTTON_X;
var BUTTON_Y;
var BUTTON_WIDTH = 150;
var BUTTON_HEIGHT = 50;
var button = function(buttonText, buttonColor, x, y, width, height) {
    var hovered = false;

    noStroke();
    fill(buttonColor.x, buttonColor.y, buttonColor.z, 80);
    if (mouseX > x - width / 2 && mouseX < x + width / 2 && mouseY > y - height / 2 && mouseY < y + height / 2) {
        fill(buttonColor.x, buttonColor.y, buttonColor.z, 50);
        if (mouseIsPressed) {
            fill(buttonColor.x, buttonColor.y, buttonColor.z, 120);
        }
        hovered = true;
    }

    rect(x - width / 2, y - height / 2, width, height, 10);
    
    textSize(16);
    fill(255);
    textAlign(CENTER, CENTER);
    text(buttonText, x, y);  
    return hovered; 
}

var Menu = function(width, height) {
    BUTTON_X = width / 2 - BUTTON_WIDTH / 2 - 5;
    BUTTON_Y = height / 2;
    this.dead = false;
    this.show = function() {
        textStyle(NORMAL);
        textAlign(CENTER, CENTER);
        textFont("Ubuntu");

        textSize(64);
        fill(255);
        stroke(255);
        
        text("Snake", width / 2, height / 4);
        
        if (button("Help", createVector(0, 0, 0), BUTTON_X + 10 + BUTTON_WIDTH, BUTTON_Y, BUTTON_WIDTH, BUTTON_HEIGHT)) {
            fill(255, 255, 255, 190);
            rect(0, BUTTON_Y + BUTTON_HEIGHT + 10, width, height);
            fill(0);
            textAlign(CENTER, CENTER);
            text("Use 'w', 'a', 's', 'd' arrows for directional control of player 1.\n Shout 'up', 'down', 'left', or 'right' for voice control.\n Eat the apples. Score points. Don't die.", width / 2, height * 3 / 4 + BUTTON_HEIGHT / 2 + 10);
        }
        if (button("Play", createVector(0, 0, 0), BUTTON_X,  BUTTON_Y, BUTTON_WIDTH, BUTTON_HEIGHT)) {
        };

        return false;
    }
    this.isDead = function() {
        return this.dead;
    }
}

function mouseReleased() {
    if (mouseX > BUTTON_X - BUTTON_WIDTH / 2 && mouseX < BUTTON_X + BUTTON_WIDTH / 2 && mouseY > BUTTON_Y - BUTTON_HEIGHT / 2 && mouseY < BUTTON_Y + BUTTON_HEIGHT / 2) {
        menu.dead = true;
    } 
}