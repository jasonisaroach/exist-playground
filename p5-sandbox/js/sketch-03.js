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
    this.stroke_color = "#000000";
    
    this.relocate = function() {
        this.xoffset = pyrand(-100, 100);
        this.yoffset = pyrand(-100, 100);
        this.stroke_color = "#000000";
    }

    this.show = function() {
        this.x = mouseX + this.xoffset; //pyrand(-100, 100);
        this.y = mouseY + this.yoffset; //pyrand(-100, 100);

        if (this.x < 0 + this.r || this.x > width - this.r || this.y < 0 + this.r || this.y > height - this.r) {
            this.stroke_color = "#FFFFFF";
        }

        stroke(this.stroke_color);
        strokeWeight(1);
        fill(255, 50);
        ellipse(this.x, this.y, this.r, this.r);
    }
}

var Orbs = [];
var interact;

function setup() {
    createCanvas(1080, 608);

    interact = createDiv("interaction: mouse & clicking.");
    interact.position(20, 20);

    for (var i = 0; i<250; i++) {
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