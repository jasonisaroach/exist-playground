function coordText(x, y) {
    var x_string = "mouseX: " + Math.floor(mouseX);
    var y_string = "mouseY: " + Math.floor(mouseY);
    var textS = 14;

    noStroke();
    fill(0);
    textSize(textS);
    text(x_string, x, y, textWidth(x_string) + 5, textSize(x_string));
    text(y_string, x, y+16, textWidth(y_string) + 5, textSize(y_string));

    stroke(0);
    strokeWeight(1);
    noFill();
    rect(x - 1, y, textWidth(x_string) + 5, textS+2);
    rect(x - 1, y+16, textWidth(x_string) + 5, textS+2);
}

function pyrand(min, max) {
    return Math.random() * (max-min) + min;
}

function Orb() {
    this.x;
    this.y;
    this.growing = true;
    this.r = pyrand(4, 16);
    this.xoffset = pyrand(-100, 100);
    this.yoffset = pyrand(-100, 100);
    
    this.relocate = function() {
        this.xoffset = pyrand(-100, 100);
        this.yoffset = pyrand(-100, 100);
    }

    this.grow = function() {
        if (this.growing) {
            this.r++;
        }
    }

    this.show = function() {
        this.x = mouseX + this.xoffset; //pyrand(-100, 100);
        this.y = mouseY + this.yoffset; //pyrand(-100, 100);
        stroke(0);
        strokeWeight(1);
        fill(0, 100);
        ellipse(this.x, this.y, this.r, this.r);
    }
}

var Orbs = [];

function setup() {
    createCanvas(640, 360);

    for (var i = 0; i<100; i++) {
        Orbs[i] = new Orb();
    }
}

function mouseClicked() {
    for (i=0;i<Orbs.length;i++) {
        Orbs[i].relocate();
    }
}

function draw() {
    background(191);

    stroke(0);
    strokeWeight(2);
    line(0, mouseY, width, mouseY);
    line(mouseX, 0, mouseX, height);

    for (i=0;i<Orbs.length;i++) {
        Orbs[i].show();
    }

    coordText(5, 5);
}