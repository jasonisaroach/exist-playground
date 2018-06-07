function Orb() {
    this.ypad = height/20;
    this.xpad = width/20;
    this.r = pyrand(4, 16);
    this.x = width/2;
    this.y = height - this.ypad;
    this.yspeed = pyrand(1, 5);
    this.xspeed = pyrand(1, 5);
    this.strokehold = "#FFFFFF";


    this.wiggleX = function () {
        this.x += pyrand(-3, 3);

        if ( this.x < 0 ||  this.x > width) {
            this.x = width/2;
            this.y = height;
            this.strokehold = "#FF0000";
        }
    }

    this.rise = function () {
        this.y -= this.yspeed;

        if (this.y < 0) { 
            this.y = height;
            this.strokehold = "#00FF00";
        }
    }

    this.show = function () {
        stroke(this.strokehold);
        strokeWeight(2);
        fill(this.strokehold);
        ellipse(this.x, this.y, this.r, this.r);
    }
}