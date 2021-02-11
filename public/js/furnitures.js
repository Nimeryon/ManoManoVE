class Furnitures {
    constructor(coords, name, size, color, shape, pixRatio) {
        this.x = coords[0];
        this.y = coords[1];
        this.name = name;
        this.color = color;
        this.shape = shape;
        this.pixRatio = pixRatio;
        this.width = parseFloat(size[0]);
        this.height = parseFloat(size[1]);
        this.widthPix = this.width / this.pixRatio;
        this.heightPix = this.height / this.pixRatio;

        this.blockWidth = this.widthPix / 4;
        this.blockHeight = this.heightPix / 4;

        this.selected = false;
    }

    draw() {
        if (this.selected) {
            fill(255);
            strokeWeight(1);
            stroke(0);
            rect(this.x, this.y, this.widthPix, this.heightPix);
        }
        let col = color(this.color);
        for (var i = 0; i < this.shape.length; i++) {
            var ligne = this.shape[i];
            for (var j = 0; j < this.shape.length; j++) {
                fill(ligne[j] ? col : 255);
                noStroke();
                rect(
                    this.x + j * this.blockWidth,
                    this.y + i * this.blockHeight,
                    this.blockWidth,
                    this.blockHeight
                );
            }
        }
    }
    move(x, y) {
        this.x = x - this.widthPix / 2;
        this.y = y - this.heightPix / 2;
    }

    mouseIn(x, y) {
        return (
            x >= this.x &&
            x <= this.x + this.widthPix &&
            y >= this.y &&
            y <= this.y + this.heightPix
        );
    }
}