// edited version of 
// https://github.com/shiffman/The-Nature-of-Code-Examples-p5.js/tree/master/chp01_vectors/NOC_1_02_bouncingball_vectors

var balls = [];
var pop_size = 40;

function setup() {
    createCanvas(640, 360);
    background(255);
    for (var i = 0; i<pop_size; i++) {
        balls[i] = new Ball();
    }
}

function draw() {
    background(51);
    for (var i=0; i<balls.length; i++) {
        balls[i].update();
        balls[i].show();
    }
}

function Ball() {
    this.pos = createVector(random(20, width-20), random(20, height-20));
    this.vel = createVector(random(-10, 10), random(-10, 10));
    this.r = 20;

    this.checkEdges = () => {
        if (this.pos.x < 0 + this.r/2) {
            this.vel.x = this.vel.x * -1;
        } else if (this.pos.x > width - this.r/2) {
            this.vel.x = this.vel.x * -1;
        };
        if (this.pos.y < 0 + this.r/2) { 
            this.vel.y = this.vel.y * -1;
        } else if(this.pos.y > height - this.r/2) {
            this.vel.y = this.vel.y * -1;
        };
    };

    this.update = () => {
        this.checkEdges();
        this.pos.add(this.vel);
    };

    this.show = () => {
        noStroke();
        fill(255, 50);
        ellipse(this.pos.x, this.pos.y, this.r, this.r);
    };
}
