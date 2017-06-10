function Orb() {
    this.ypad = height/20;
    this.xpad = width/20;
    this.r = pyrand(4, 16);
    this.x = width/2;
    this.y = height - this.ypad;
    this.yspeed = pyrand(1, 5);
    this.xspeed = pyrand(1, 5);


    this.wiggleX = function () {
        this.x += pyrand(-5, 5);

        if (this.x > width || this.x < 0) {
            this.x = width/2;
        }
    }

    this.wiggleY = function () {
        this.y += pyrand(-5, 5);
    }

    this.rise = function () {
        this.y -= this.yspeed;

        if (this.y < 0) { 
            this.y = height;
        }
    }

    this.show = function () {
        stroke(127);
        strokeWeight(2);
        fill(255);
        ellipse(this.x, this.y, this.r, this.r);
    }
}