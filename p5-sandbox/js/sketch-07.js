function pyrand(min, max) {
    return Math.random() * (max-min) + min;
}

function Orb() {
    // this.pos = createVector(pyrand(0, width), pyrand(0, height));
    this.pos = createVector(random(width/2-200, width/2+100), random(height/2-200, height/2+200));
    this.vel = createVector(pyrand(-1, 1), pyrand(-1, 1));
    this.r = 14;
    this.accel = 0.04;

    this.update = function() {
        this.checkEdges();
        this.pos.add(this.vel);
    };

    this.show = function() {
        noStroke();
        fill(255, 100);

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

        // if (this.pos.x < width/2+60 && this.pos.y < height/2+60 && this.pos.y > height/2-60 || this.pos.x > width/2-60) {
        //     this.pos.x
        // };
    };
}

var popul = [];
var target;

function setup() {
    // createCanvas(640, 360);
    createCanvas(1080, 608);
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
        popul[i].show();
    }

    stroke(0, 0);
    strokeWeight(4);
    fill(255, 0.4 * 255);
    ellipse(width/2, height/2, 50, 50);
}