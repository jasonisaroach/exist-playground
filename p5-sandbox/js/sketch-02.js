function pyrand(min, max) {
    return Math.random() * (max-min) + min;
}

var orbs = [];
var interact;
function setup() {
    createCanvas(1080, 608);

    interact = createDiv("interaction: 'a' gathers to width/2, 'd' spreads from width/2");
    interact.position(20, 20);


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

    if (keyIsPressed && key == 'a') {
        for (var i=0; i<orbs.length; i++) {
            if (orbs[i].x < width/2) {
                orbs[i].x += 5;
            } else if (orbs[i].x >= width/2) {
                orbs[i].x -= 5;
            }
        }
    } else if (keyIsPressed && key == 'd') {
        for (var i=0; i<orbs.length; i++) {
            if (orbs[i].x < width/2) {
                orbs[i].x -= 5;
            } else if (orbs[i].x >= width/2) {
                orbs[i].x += 5;
            }
        }
    }
}

function keyPressed() {
    if (keyCode == 40) {
        orbs = [];
        for (var i=0; i<200; i++) {
            orbs[i] = new Orb();
        }
    } else if (keyCode == 37) {
        for (var i=0; i<orbs.length; i++) {
            if (orbs[i].x < width/2) {
                orbs[i].x += 5;
            } else if (orbs[i].x >= width/2) {
                orbs[i].x -= 5;
            }
        }
    } else if (keyCode == 39) {
        for (var i=0; i<orbs.length; i++) {
            if (orbs[i].x < width/2) {
                orbs[i].x -= 5;
            } else if (orbs[i].x >= width/2) {
                orbs[i].x += 5;
            }
        }

    }
}