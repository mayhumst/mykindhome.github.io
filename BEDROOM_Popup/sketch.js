let fixLamp = false;
let fixComp = false;
let bedOpeningBox = true;
let carpet;
let dresser;
let bed;
let desk;
let computer;
let comp1;
let comp2;
let light2;
let lamp;
let chair;
let dLamp;
let dComp;
let d3;
let problemLamp;
let problemComp;
let openingText;
let offset = 0;

function preload() {
  openingText = loadImage("openingText.png");
  computerText = loadImage("computerText.png");
  lightText = loadImage("lightText.png");
  carpet = loadImage("carpet.png");
  dresser = loadImage("dresser.png");
  bed = loadImage("bed.png");
  desk = loadImage("desk.png");
  computer = loadImage("computer.png");
  comp1 = loadImage("comp1.png");
  comp2 = loadImage("comp2.png");
  light2 = loadImage("light2.png");
  lamp = loadImage("lamp.png");
  chair = loadImage("chair.png");
  problemLamp = loadImage("problem3.png");
  problemComp = loadImage("problem4.png");
}

function setup() {
  createCanvas(896, 518);
}

function draw() {
  background("#B4BD97");
  dLamp = dist(mouseX, mouseY, 66, 121);
  dComp = dist(mouseX, mouseY, 425, 205);
  d3 = dist(mouseX, mouseY, 154, 87);
  image(carpet, 0, 423, width, 95);
  image(dresser, 537.6, 69.3, 314.3, 399.7);
  image(bed, 412.3, 249.9, 468.3, 224);
  image(desk, 36.4, 294, 361.2, 188.3);
  image(computer, 151, 125.3, 230.3, 172.2);
  let opacity = map(sin(offset), -1, 1, 0, 255);
  offset += 0.4;

  if (fixComp) {
    image(computerText, 393, 65, 158, 99);
  } else {
    push();
    imageMode(CENTER);
    image(problemComp, 425, 205, 66, 66);
    pop();
    image(comp1, 162.9, 137.2, 205.1, 114.8);
    tint(255, opacity);
    image(comp2, 162.9, 137.2, 205.1, 114.8);
    noTint();
  }

  if (fixLamp) {
    image(lightText, 122, 54, 158, 99);
  } else {
    push();
    imageMode(CENTER);
    image(problemLamp, 66, 121, 66, 66);
    pop();
    image(light2, 100, 193, 66, 64);
  }

  image(lamp, 45, 162, 88, 133);
  image(chair, 156, 207, 165.9, 269.5);

  if (bedOpeningBox) {
    image(openingText, 124, 59, 648, 400);
  }
}

function mousePressed() {
  if (dLamp <= 33) {
    fixLamp = true;
  }
  if (dComp <= 33) {
    fixComp = true;
  }
  if (d3 <= 20) {
    bedOpeningBox = false;
  }
}
