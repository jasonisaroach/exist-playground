// global variables here

function setup() {
    // setup of program
    createCanvas(640, 360); 
}

function draw() {
    // sets the background to a nice grey
    background(51);

    // setting stroke/fill values
    stroke(255, 127);
    strokeWeight(4);
    fill(255,50);

    // examples of p5 2d drawing
    line(0, 0, width, height);
    triangle(270, 300, 170, 200, 370, 200);
    rect(10, 10, width/4, height/4);
    ellipse(width/2, height/2, 20, 20);
}