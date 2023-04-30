let fixLaundry = false;
let lauTile;
let basket;
let lauShelf;
let laundrySet;
let clothes3;
let clothes4;
let extras;
let problemLaundry;
let dLaundry;
let dbox;
let lauOffset = 0;

function preload() {
  lauTile = loadImage("lauTile.png");
  basket = loadImage("basket.png");
  lauShelf = loadImage("lauShelf.png");
  laundrySet = loadImage("laundrySet.png");
  clothes3 = loadImage("clothes3.png");
  clothes4 = loadImage("clothes4.png");
  extras = loadImage("extras.png");
  problemLaundry = loadImage("problemLaundry.png");
}

function setup() {
  createCanvas(896, 518);
}

function draw() {
  background("#F9EBC7");
  dLaundry = dist(mouseX, mouseY, 74, 296);
  image(lauTile, 0, 421, width, 97);
  image(basket, 579, 289, 144.7, 200.51);
  image(lauShelf, 68, 30, 470, 143.84);
  image(laundrySet, 52.5, 190.4, 519.94, 287.88);
  let opacity = map(sin(lauOffset), -1, 1, 0, 255);
  lauOffset += 0.06;

  if (fixLaundry) {
    //laundry text box
  } else {
    push();
    imageMode(CENTER);
    image(problemLaundry, 74, 296, 66, 66);
    pop();
    image(clothes3, 130.2, 304.5, 124.4, 99.97);
    tint(255, opacity);
    image(clothes4, 135.8, 299.6, 120.14, 103.61);
    noTint();
  }
  image(extras, 130.2, 277.9, 141.41, 115.45);
  
  
}

function mousePressed() {
  if (dLaundry <= 33) {
    fixLaundry = true;
  }
}
