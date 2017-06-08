var population = [];
var popsize;

function rand(min, max) {
    return Math.random() * (max-min) + min;
}

const dist = (x1, y1, x2, y2) => {
    Math.sqrt(((x2-x1)^2)+((y2-y1)^2));
};

function setup() {
    createCanvas(640, 360);
    popsize = 100;
    for (i=0;i<popsize;i++) {
        var startx = rand(20, width-20);
        var starty = rand(20, height-20);
        var endx = rand(20, width-20);
        var endy = rand(20, height-20);
        population.push([startx, starty, endx, endy]);
    }
}

function draw() {
    background(0);

    stroke(255, 127);
    strokeWeight(3);
    for (i=0;i<population.length;i++) {
        line(population[i][0], population[i][1], population[i][2], population[i][3]);
        var d = Math.floor(Math.random() * 2);
        if (population[i][0] > 20) {
            population[i][0]--;
        }
        if (d == 1) {
            population[i][0]++;
        } else {
            population[i][0]--;
        }
    }
}