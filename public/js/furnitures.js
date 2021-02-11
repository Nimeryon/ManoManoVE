class Furnitures {
    constructor() {
        this.name = "table"
        this.size = ["1.5", "1"]
        this.color = "#FFF000"
        this.shape = [
            [true, false, false, true],
            [true, true, true, true],
            [true, true, true, true],
            [true, true, true, true]
        ]
    }
  }

var furniture = new Furnitures()

function setup() {
  createCanvas(720, 360);
  taille = 50
  offset_x = 10
  offset_y = 10
}

function outline(){
    
}

function draw() {
    let hexa = furniture.color
    let col = color(hexa);
    matrix = furniture.shape;
    var coo = {};
    for(var i = 0; i < matrix.length; i++) {
        var ligne = matrix[i];
        for(var j = 0; j < ligne.length; j++) {
            if (ligne[j] == true){
                fill(col);
                noStroke();
                rect(offset_x + (j*taille), offset_y + (i*taille), taille, taille);
            }
        }
    }
}