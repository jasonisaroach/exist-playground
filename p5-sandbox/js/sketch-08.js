// edited version of 
// https://github.com/shiffman/The-Nature-of-Code-Examples-p5.js/tree/master/chp01_vectors/NOC_1_02_bouncingball_vectors

var balls = [];
var pop_size = 250;

function distance(x1, y1, x2, y2) {
    return sqrt(((x2 - x1) ** 2) + (y2 - y1) ** 2);
}

var ineract;
function setup() {
    createCanvas(1080, 608);
    background(255);

    interact = createDiv("interaction: 'a' and 'd' modify ball velocity");
    interact.position(20, 20);

    for (var i = 0; i<pop_size; i++) {
        balls[i] = new Ball();
    }
}

function draw() {
    background(51);
    for (var i=0; i<balls.length; i++) {
        balls[i].update();
        balls[i].show();

        for (var j=0; j<balls.length; j++) {
            if (distance(balls[i].pos.x, balls[i].pos.y, balls[j].pos.x, balls[j].pos.y) < 25) {
                stroke(255);
                line(balls[i].pos.x, balls[i].pos.y, balls[j].pos.x, balls[j].pos.y);
            }
        }
    }

    if (keyIsPressed && key == 'a') {
        for (var i=0; i<balls.length; i++) {
            balls[i].vel.x = balls[i].vel.x * .95;
            balls[i].vel.y = balls[i].vel.y * .95;
        }
    } else if (keyIsPressed && key == 'd') {
        for (var i=0; i<balls.length; i++) {
            balls[i].vel.x = balls[i].vel.x * 1.05;
            balls[i].vel.y = balls[i].vel.y * 1.05;
        }
    }
}

function Ball() {
    this.pos = createVector(random(20, width-20), random(20, height-20));
    this.vel = createVector(random(-5, 5), random(-5, 5));
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
