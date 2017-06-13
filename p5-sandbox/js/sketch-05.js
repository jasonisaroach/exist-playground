'use strict'

function pyrand(min, max) {
    return Math.random() * (max-min) + min;
}

var arcEnds = [];
var angle1 = 0;
var angle2 = 0;
var angle3 = 0;

const PI = 3.14159265358979;
const HALF_PI = PI/2;

const circle_segment = PI + HALF_PI;

function setup() {
    createCanvas(640, 360);

    for (var i=0; i<360; i++) {
        if (i % 60 == 0) {
            arcEnds.push(i);
        }
    }

    angle1 = [pyrand(0, HALF_PI/3), pyrand(HALF_PI/3, HALF_PI)];
    angle2 = [pyrand(HALF_PI, PI), pyrand(PI, circle_segment)];
    angle3 = [pyrand(circle_segment, (circle_segment+TWO_PI/16)), pyrand((circle_segment+TWO_PI/16), TWO_PI)];

    // slide1 = createSlider(0, (TWO_PI-PI/16)-angle1, 0.1);
    // slide2 = createSlider(0, (TWO_PI-PI/16)-angle2, 0.1);
}

function draw() {
    background(0);
    stroke(255);

    // strokeWeight(1);
    // noFill();
    // text("Angle1: " + angle1, 10, 10, 100, 50);
    // text("Angle2: " + angle2, 10, 40, 100, 50);
    
    strokeWeight(4);
    // fill(255, 50);
    fill(255);

    arc(width/2, height/2, 200, 200, angle1[0], angle1[1]);
    arc(width/2, height/2, 200, 200, angle2[0], angle2[1]);// +slide1.value());
    arc(width/2, height/2, 200, 200, angle3[0], angle3[1]);// +slide2.value());

    angle1[0] += 0.02;
    angle2[0] += 0.02;
    angle3[0] += 0.04;
    angle1[1] += 0.04;
    angle2[1] += 0.08;
    angle3[1] += 0.08;
}