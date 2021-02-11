var width = 800;
var height = 400;

var room;
var furnitures;

function setup() {
    createCanvas(800, 400);
    room = new Room(4.5, 2.3, width, height);
    room.furnitures = [
        new Furnitures(
            [50, 50],
            "table", ["1", "1"],
            "#FFF000", [
                [true, false, true, true],
                [true, true, true, true],
                [true, true, true, true],
                [true, false, false, true],
            ],
            room.pixRatio
        ),
    ];
}

function draw() {
    background(255);

    room.draw();
    for (var i = 0; i < room.furnitures.length; i++) {
        room.furnitures[i].draw();
    }
}

function mousePressed() {
    for (var i = 0; i < room.furnitures.length; i++) {
        if (room.furnitures[i].mouseIn(mouseX, mouseY)) {
            room.furnitures[i].selected = true;
        } else {
            room.furnitures[i].selected = false;
        }
    }
}