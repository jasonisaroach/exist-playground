var target_r = 100;

function Mover() {
    this.pos = createVector(random(0, width), random(0, height));
    this.vel = createVector(random(random(-5, -3), random(3, 5)), random(random(-5, -3), random(3, 5)));
    this.stroke = "#FFFFFF";
    this.weight = 8;
    this.cent_touch = false;

    this.checkEdges = () => {
        if ((this.pos.x < 0) || (this.pos.x > width)) {
            this.vel.x = this.vel.x * -1;
        }
        if ((this.pos.y < 0) || (this.pos.y > height)) {
            this.vel.y = this.vel.y * -1;
        }
    }
    this.checkCentColl = () => {
        this.cent_touch = collidePointCircle(this.pos.x, this.pos.y, width/2, height/2, target_r);
        if (this.cent_touch) {
            this.stroke = "#FF0000";
            this.weight = 4;
        }
    }
    this.update = () => {
        this.checkEdges();
        this.checkCentColl();
        this.pos.add(this.vel);
    }
    this.show = () => {
        stroke(this.stroke);
        strokeWeight(this.weight);
        noFill();
        point(this.pos.x, this.pos.y);
    }
}

var points = [];

var setup = () => {
    createCanvas(1080, 608);
    stroke(255);
    strokeWeight(1);
    fill(255);
    for (var i = 0; i<100; i++) {
        points[i] = new Mover();
    }
}

var draw = () => {
    background(0);

    if (keyIsPressed && keyCode == 37) {
        target_r -= 2;
    } else if (keyIsPressed && keyCode == 39) {
        target_r += 2;
    }

    noStroke();
    fill(255, 50);
    ellipse(width/2, height/2, target_r, target_r);

    for (var i = 0; i<points.length; i++) {
        points[i].update();
        points[i].show();
    }
}

function keyPressed() {
    if (keyCode == 40) {
        points = [];
        for (var i = 0; i<100; i++) {
            points[i] = new Mover();
        }
    }
}