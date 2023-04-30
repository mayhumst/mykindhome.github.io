let floor;
let fridge;
let stove;
let shelves;
let trashset;
let trash;
let problem;
let fix = false;
let d;

function preload(){
  floor = loadImage("floor.png");
  fridge = loadImage("fridge.png");
  stove = loadImage("stove.png");
  shelves = loadImage("shelves.png");
  trashset = loadImage("trashset.png");
  trash = loadImage("trash.png");
  problem = loadImage("problem.png");
}

function setup() {
  createCanvas(896, 518);
}

function draw() {
  background("#FEFAE0");
  d = dist(mouseX, mouseY, 682, 318);
  image(floor, 0, 431, width, 87);
  image(fridge, 20, 115, 209, 360);
  image(stove, 248, 241, 434, 234);
  image(shelves, 275, 64, 589, 137);
  
  if(fix) {
    //add text box here
    image(trashset, 608, 380, 254, 116);
  } else {
    image(trash, 690, 358, 121, 139);
    push();
    imageMode(CENTER);
    image(problem, 682, 318, 66, 66);
    pop();
  }
}

function mousePressed(){
  if (d<=33){
    fix = true
  }
}