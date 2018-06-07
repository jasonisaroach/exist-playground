var xspacing = 8;          // X-Distance between each point on the wave
var w;                     // Width of the wave, extends partially offscreen for better viewing
var theta = 0.0;           // Starts the angle of the wave at 0
var amplitude = 20;        // Height of wave, +5 from height/2 to -5 from height/2
var period = 50.0;         // How many pixels before the wave repeats, crest/crest to trough/trough
var dx;                    // Value for incrementing x
var yvalues;               // Using an array to store height values for the wave

// var foo = (arg1, arg2) => {
//   return arg1 - arg2;
// };

function rand(min, max) {
    return Math.random() * (max-min) + min;
}

function setup() {
  // console.log(foo(42, 21));
  // createCanvas(640, 360);
  createCanvas(1080, 608);
  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  // 3.14159265 * 2  = 6.2831853
  // 6.2831853   / 50 = 0.12566371
  // 0.12566371  * 8  = 1.00530965
  yvalues = new Array(floor(w/xspacing));
  // w = 656, xspacing = 8
  // w/xspacing = 82
  //the space between the (-5,5) range of height/2 is seperated into 82 y-coord slices, to increment the wave's y-coord
}

function draw() {
  background(0);
  calcWave();
  renderWave();
}

function calcWave() {
  // Increment theta (try different values for 
  // 'angular velocity' here)
  theta += 0.08;

  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
    // if ((Math.random() * 100) > 99) {
    //   // console.log(x);
    // }
  }
}

function renderWave() {
  //   noStroke();
  //   fill(255);
  stroke(255, 127);
  strokeWeight(4);
  // A simple way to draw the wave with an ellipse at each location
  for (var x = 0; x < yvalues.length; x++) {
    point(x*xspacing, height/2+yvalues[x]);
    line(x*xspacing, 4, x*xspacing, height/2-20+yvalues[x]);
    line(x*xspacing, height-4, x*xspacing, height/2+20+yvalues[x]);
    // ellipse(x*xspacing, height/2+yvalues[x], 16, 16);
  }
}
