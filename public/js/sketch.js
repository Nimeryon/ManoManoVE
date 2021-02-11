var canvas_width = 800;
var canvas_height = 600;

var room;
var furnitures;

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent(document.getElementById("canvas"));

    room = new Room(4.5, 2.3, canvas_width, canvas_height);
    room.furnitures = [
        new Furnitures(
            [50, 100],
            "table basse", ["1.5", "0.5"],
            "#FFF000", [
                [true, true, true, true],
                [true, true, true, true],
                [true, true, true, true],
                [true, false, false, true],
            ],
            room.pixRatio
        ),
        new Furnitures(
            [150, 100],
            "canapé", ["2", "1"],
            "#000000", [
                [false, false, true, true],
                [false, false, true, true],
                [true, true, true, true],
                [true, true, true, true],
            ],
            room.pixRatio
        ),
    ];
}

function draw() {
    background(255);

    for (var i = 0; i < room.furnitures.length; i++) {
        room.furnitures[i].draw();
    }
    room.draw();
}

function mousePressed() {
    for (var i = room.furnitures.length - 1; i >= 0; i--) {
        if (room.furnitures[i].mouseIn(mouseX, mouseY)) {
            room.clearSelection();
            room.furnitures[i].selected = true;
            room.selection = i;
            return;
        } else {
            room.clearSelection();
        }
    }
}

function mouseDragged() {
    if (room.selection != null) {
        room.furnitures[room.selection].move(mouseX, mouseY, room);
    }
}

function keyPressed() {
    if (room.selection != null) {
        if (keyCode == RIGHT_ARROW) {
            room.furnitures[room.selection].rotate();
        }
        if (keyCode == BACKSPACE) {
            room.furnitures.splice(room.selection, 1);
            room.selection = null;
        }
    }
}