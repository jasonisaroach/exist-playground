var arc1;
var arc2;
var arc3;

function setup() {
    createCanvas(640, 360);
    arc1 = [0, TWO_PI/6];
    arc2 = [(TWO_PI/6) * 2, (TWO_PI/6) * 3];
    arc3 = [(TWO_PI/6) * 4, (TWO_PI/6) * 5];
}

function draw() {
    background("#2e2e2e");
    stroke(255);
    // strokeWeight(2);
    // noFill();
    fill(255, 50)

    // arc(width/2, height/2, 300, 300, arc1[0], arc1[1]);
    // arc(width/2, height/2, 300, 300, arc2[0], arc2[1]);
    // arc(width/2, height/2, 300, 300, arc3[0], arc3[1]);
    
    arc(width/2, height/2, 110, 300, arc1[0], arc1[1]);
    arc(width/2, height/2, 120, 300, arc2[0], arc2[1]);
    arc(width/2, height/2, 130, 300, arc3[0], arc3[1]);

    // arc(width/2, height/2, 300, 150, arc1[0], arc1[1]);
    // arc(width/2, height/2, 300, 150, arc2[0], arc2[1]);
    // arc(width/2, height/2, 300, 150, arc3[0], arc3[1]);

    arc1[0] += 0.02;
    arc1[1] += 0.02;
    arc2[0] += 0.02;
    arc2[1] += 0.02;
    arc3[0] += 0.02;
    arc3[1] += 0.02;
}