var xpoints = [];
var ypoints = [];
var sinpoints = [];
var xory = 0;

function mouseClicked() {
    if (xory != 1) {
        xory = 1;
    } else if (xory != 0) {
        xory = 0;
    }
}

function setup() {
    createCanvas(640, 360);
    for (i=0; i<width; i++) {
        if (i % 10 == 0) {
            xpoints.push(i);
        }
    }
    xpoints.push(width);
    for (i=0; i<height; i++) {
        if (i % 10 == 0) {
            ypoints.push(i);
        }
    }
    ypoints.push(height);

    for (i=0; i<width; i++) {
        sinpoints.push(i);
    }
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(2);
    fill(255);

    
        if (xory == 0) {
            for (i=0; i<xpoints.length; i++) {
                line(mouseX, mouseY, xpoints[i], 0);
                line(mouseX, mouseY, xpoints[i], height);
            }
        } else if (xory = 1) {
            for (i=0; i<ypoints.length; i++) {
                line(mouseX, mouseY, 0, ypoints[i]);
                line(mouseX, mouseY, width, ypoints[i]);
            }
        }
    
    stroke(0);
    strokeWeight(4);
    for (i=0; i<sinpoints.length; i++) {
        var x = sinpoints[i];
        var y = sin(x);
        point(x, y);
    }
        
}