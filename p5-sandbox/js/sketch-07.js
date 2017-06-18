function pyrand(min, max) {
    return Math.random() * (max-min) + min;
}

function Orb() {
    // this.pos = createVector(pyrand(0, width), pyrand(0, height));
    this.pos = createVector(pyrand((width/2)-200, (width/2)+200), pyrand((height/2)-200, (height/2)+200));
    this.vel = createVector(pyrand(-1, 1), pyrand(-1, 1));
    this.r = 10;
    this.accel = 0.16;

    this.update = function() {
        this.pos.add(this.vel);
    };

    this.show = function() {
        noStroke();
        fill(255, 50);

        ellipse(this.pos.x, this.pos.y, this.r, this.r);
    };

    this.seekLocation = function(position) {
        if (this.pos.x < position[0]) {
            this.vel.x += this.accel;
        } else if (this.pos.x > position[0]) {
            this.vel.x -= this.accel;
        };
        if (this.pos.y < position[1]) {
            this.vel.y += this.accel;
        } else if (this.pos.y > position[1]) {
            this.vel.y -= this.accel;
        };
    };

    this.checkEdges = function() {
        if (this.pos.x > width) {
            this.pos.x = 0;
            this.vel.x = 0;
        } 
        else if (this.pos.x < 0) {
            this.pos.x = width;
            this.vel.x = 0;
        }

        if (this.pos.y > height) {
            this.pos.y = 0;
            this.vel.y = 0;
        } 
        else if (this.pos.y < 0) {
            this.pos.y = height;
            this.vel.y = 0;
        }
    };
}

var popul = [];
var target;

function setup() {
    // createCanvas(640, 360);
    createCanvas(640, 360);
    // background(0);

    target = [width/2, height/2];
    for (var i = 0; i<10; i++) {
        popul[i] = new Orb();
    }
}

function draw() {
    background(0);
    for (var i = 0; i<popul.length; i++) {
        popul[i].update();
        popul[i].seekLocation(target);
        popul[i].checkEdges();
        popul[i].show();
    }

    stroke(0, 0);
    strokeWeight(4);
    fill(255, 0.4 * 255);
    ellipse(width/2, height/2, 50, 50);
}