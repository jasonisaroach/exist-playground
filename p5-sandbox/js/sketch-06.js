
function distance(x1, y1, x2, y2) {
    return sqrt(((x2 - x1)**2) + ((y2-y1)**2));
  }
  
  var coords = [];
  var coord_pop = 500;
  var coord_dist = 50;
  var text, link;
  function setup() {
    createCanvas(1080, 608);
    
    text = createDiv("Left, Down, Right")
    text.position(20, 20);
    link = createA("../", "index")
    link.position(20, 40);
  
    stroke(255);
    strokeWeight(2);
    fill(255, 50);
  
    for (var i=0; i<coord_pop; i++) {
      coords.push([random(0, width), random(0, height)]);
      // print(coords[i]); 
    }
    // print(coords);
  }
  
  function draw() {
    background(0);
    stroke(255);
    strokeWeight(2);
    fill(255, 50);
    for (var i=0; i<coords.length; i++) {
      for (var j=0; j<coords.length; j++) {
        if (distance(coords[i][0], coords[i][1], coords[j][0], coords[j][1]) < coord_dist && distance(coords[i][0], coords[i][1], coords[j][0], coords[j][1]) > 0) {
          line(coords[i][0], coords[i][1], coords[j][0], coords[j][1]);
        }
      }
    }

    if (keyIsPressed && keyCode == 37) {
        coord_dist -= 1;
    } else if (keyIsPressed && keyCode == 39) {
        coord_dist += 1;
    }
  }
  
  function keyPressed() {
    if (keyCode == 40) {
      coords = [];
      for (var i=0; i<coord_pop; i++) {
        coords.push([random(0, width), random(0, height)]);
        // print(coords[i]); 
      }
    }
    // } else if (keyCode == 37 && coord_dist > 0) {
    //   coord_dist -= 5;
    // } else if (keyCode == 39 && coord_dist < 100) {
    //   coord_dist += 5;
    // }
  }