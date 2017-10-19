function Coin() {
  this.state = 0;

  this.display=()=>{
    stroke(255);
    strokeWeight(2);

    if (coin.state = 1) {
      fill(255, 50);
    } else if (coin.state = 0) {
      fill(0);
    }

    ellipse(1080/2, 608/2, 100, 100);
  }
}


var coin;
function setup() {
  createCanvas(1080, 608);
  coin = new Coin();
}

function draw() {
  background(0);
  coin.display();
  // print(coin.state)
  if (keyIsPressed && key == 's') {
    if (random() > 0.5) {
      if (coin.state != 0) {
        coin.state = 0;
      } else {
        coin.state = 1;
      }
    }
  }
}