// variables here

var xmin = -1;
var xmax = 1;
var ymin = -1;
var ymax = 1;

function mainChar() {
    this.x = random(-1, 1);
    this.y = random(-1, 1);
    this.pos = createVector(map(this.x, xmin, xmax, 0, width), map(this.y, ymin, ymax, 0, height));
    this.vel = createVector(0, 0);
    this.movements = [0, 0, 0, 0] // up, down, left, right

    this.update = () => {
        if (this.movements[0] == 1) this.vel.y = -3;
        if (this.movements[1] == 1) this.vel.y = 3;
        if (this.movements[2] == 1) this.vel.x = -3;
        if (this.movements[3] == 1) this.vel.x = 3;

        this.pos.add(this.vel);
    }
    this.show = () => {
        stroke(255);
        strokeWeight(2);
        fill(255, 50);
        // ellipse(this.pos.x, this.pos.y, 50, 50);
        ellipse(this.pos.x, this.pos.y, 50, 50);
    }
}


var character;

function setup() {
    createCanvas(640, 360);
    character = new mainChar();
}

function draw() {
    // code drawn to screen
    background(51);

    if (keyIsPressed) {
        if ((key == 'w') || (key == 'W')) character.movements[0] = 1;
        if ((key == 's') || (key == 'S')) character.movements[1] = 1;
        if ((key == 'a') || (key == 'A')) character.movements[2] = 1;
        if ((key == 'd') || (key == 'D')) character.movements[3] = 1;
    }

    character.update();
    character.show();
}