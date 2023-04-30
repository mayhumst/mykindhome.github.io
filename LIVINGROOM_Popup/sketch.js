let fix = false;
let floor;
let window1;
let window2;
let couch;
let painting1;
let painting2;
let plant;
let problem;
let fan1;
let fan2;
let fan3;
let d;
let offset = 0;
let offset2 = 0;

function preload() {
  floor = loadImage("floor.png");
  window1 = loadImage("window1.png");
  window2 = loadImage("window2.png");
  couch = loadImage("couch.png");
  painting1 = loadImage("painting1.png");
  painting2 = loadImage("painting2.png");
  plant = loadImage("plant.png");
  fan1 = loadImage("fan1.png");
  fan2 = loadImage("fan2.png");
  fan3 = loadImage("fan3.png");
  problem = loadImage("problem.png");
}

function setup() {
  createCanvas(896, 518);
}

function draw() {
  d = dist(mouseX, mouseY, 305, 172);
  let opacity = map(sin(offset), -1, 1, 0, 255);
  let opacity2 = map(sin(offset2), -1, 1, 0, 255);
  offset += 0.9;
  offset2 += 0.8;

  background("#884E1B");
  image(floor, 0, 429, width, 89);

  if (fix) {
    image(window2, 455, 61, 407, 278);
  } else {
    image(window1, 455, 61, 407, 278);
  }

  image(couch, 43, 232, 530, 232);
  image(painting1, 49, 91, 105, 117);
  image(painting2, 175, 63, 181, 89);
  image(plant, 658, 182, 225, 306);

  if (fix) {
    image(fan2, 225, 0, 456.68, 180.48);
    //add text
  } else {
    push();
    imageMode(CENTER);
    image(problem, 305, 172, 66, 66);
    pop();
    image(fan1, 225, 0, 354.95, 180.46);
    tint(255, opacity);
    image(fan2, 225, 0, 456.68, 180.48);
    noTint();
    tint(255, opacity2);
    image(fan3, 225, 0, 456.68, 180.48);
    noTint();
  }
}

function mousePressed() {
  if (d <= 33) {
    fix = true;
  }
}
