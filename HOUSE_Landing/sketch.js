let grass;
let house;

function preload(){
  grass = loadImage("grass.png");
  house = loadImage("house.png");
}

function setup() {
  createCanvas(896, 518);
}

function draw() {
  background("#F9EBC7");
  image(grass, 0, 340, width, 176);
  image(house, 190, 43, 515, 395.3);
}