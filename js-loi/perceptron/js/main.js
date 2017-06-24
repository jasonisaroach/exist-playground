var perceptron = require('perceptron');

var and = perceptron( ['debug'] );

and.train([1, 1], 1)
and.train([0, 1], 0)
and.train([1, 0], 0)
and.train([0, 0], 0)

// practice makes perfect (we hope...)
while(!and.retrain()) {}

and.perceive([1, 1]) // => 1
and.perceive([0, 1]) // => 0
and.perceive([1, 0]) // => 0
and.perceive([0, 0]) // => 0

var Perceptron = (options) => {
    if (!options) {
        this.options = {};
    } else {
        this.options = options;
    }

    if ('debug' in this.options) {
        this.debug = true;
    } else {
        this.debug = false;
    }

    
}