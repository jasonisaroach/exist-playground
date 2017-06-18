// Make an instance of two and place it on the page.
var elem = document.getElementById('draw-shapes');
var params = { width: 640, height: 360 };
var two = new Two(params).appendTo(elem);

// two has convenience methods to create shapes.
var circle = two.makeCircle(320, 180, 50);
var rect = two.makeRectangle(320, 150, 100, 100);

// The object returned has many stylable properties:
circle.fill = '#FFFFFF';
circle.stroke = 'black'; // Accepts all valid css color
circle.opacity = 0.75;
circle.linewidth = 4;

rect.fill = 'rgb(0, 200, 255)';
rect.opacity = 0.75;
rect.noStroke();

// Don't forget to tell two to render everything
// to the screen
two.update();