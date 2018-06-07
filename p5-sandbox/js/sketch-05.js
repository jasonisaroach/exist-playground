'use strict'

function pyrand(min, max) {
    return Math.random() * (max-min) + min;
}

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

var arcEnds = [];
var angleConst = 0.02;
var angle1 = 0;
var angle2 = 0;
var angle3 = 0;

const PI = 3.14159265358979;
const HALF_PI = PI/2;

const circle_segment = PI + HALF_PI;

function setup() {
    createCanvas(1280, 720);
    background(0);

    for (var i=0; i<360; i++) {
        if (i % 60 == 0) {
            arcEnds.push(i);
        }
    }

    // angle1 = [pyrand(0, HALF_PI/3), pyrand(HALF_PI/3, HALF_PI)];
    angle1 = [0, TWO_PI/6];
    angle2 = [(TWO_PI/6) * 2, (TWO_PI/6) * 3];
    angle3 = [(TWO_PI/6) * 4, (TWO_PI/6) * 5];

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
    fill(255, 50);
    // noFill();

    stroke(255, 0, 0);
    arc(width/2, height/2, 200, 200, angle1[0], angle1[1]);

    stroke(0, 255, 0);
    arc(width/2, height/2, 200, 200, angle2[0], angle2[1]);// +slide1.value());

    stroke(0, 0, 255);
    arc(width/2, height/2, 200, 200, angle3[0], angle3[1]);// +slide2.value());

    angle1[0] += angleConst;
    angle2[0] += angleConst;
    angle3[0] += angleConst;
    angle1[1] += angleConst;
    angle2[1] += angleConst;
    angle3[1] += angleConst;
}

function mouseClicked() {
    angleConst *= -1;
}