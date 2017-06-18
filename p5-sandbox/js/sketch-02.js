function pyrand(min, max) {
    return Math.random() * (max-min) + min;
}

var orbs = [];

function setup() {
    createCanvas(640, 360);
    for (var i=0;i<200;i++) {
        orbs[i] = new Orb();
        // ellipses.push([Math.floor(), Math.floor()]);
    }
}

function draw() {
    background(0);
    stroke(255);
    for (var i = 0; i < orbs.length; i++) {
        orbs[i].rise();
        orbs[i].wiggleX();
        orbs[i].show();
    }
}