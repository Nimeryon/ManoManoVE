var width = 800;
var height = 400;

var room;

function setup() {
    createCanvas(800, 400);
    room = new Room(4.5, 2.3, width, height);
}

function draw() {
    background(255);
    room.draw();
}