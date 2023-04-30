let fixSink = false;
let fixShower = false;
let bathOpeningBox = true;
let tile;
let water1;
let water2;
let water3;
let water4;
let mirror;
let painting;
let problem;
let problem2;
let shelf;
let shower;
let sink;
let toilet;
let bathOpeningText;
let d1;
let d2;
let d3;
let bathOffset = 0;

function preload() {
  bathOpeningText = loadImage("bathOpeningText.png");
  showerText = loadImage("showerText.png");
  sinkText = loadImage("sinkText.png");
  tile = loadImage("tile.png");
  water1 = loadImage("water1.png");
  water2 = loadImage("water2.png");
  water3 = loadImage("water3.png");
  water4 = loadImage("water4.png");
  mirror = loadImage("mirror.png");
  painting = loadImage("painting.png");
  problem = loadImage("problem.png");
  problem2 = loadImage("problem2.png");
  shelf = loadImage("shelf.png");
  shower = loadImage("shower.png");
  sink = loadImage("sink.png");
  toilet = loadImage("toilet.png");
}

function setup() {
  createCanvas(896, 518);
}

function draw() {
  d1 = dist(mouseX, mouseY, 651, 304);
  d2 = dist(mouseX, mouseY, 215, 159);
  d3 = dist(mouseX, mouseY, 154, 87);
  background("#707F99");
  image(tile, 0, 413, width, 105);
  image(toilet, 350, 231, 174, 250);
  image(sink, 624, 211, 221, 278);
  image(mirror, 654, 19, 156, 181);
  image(painting, 448, 62, 131, 145);
  image(shelf, 40, 32, 266, 77);
  image(shower, 40, 117, 277, 367);

  let opacity = map(sin(bathOffset), -1, 1, 0, 255);
  bathOffset += 0.4;

  if (fixSink) {
    image(sinkText, 519, 281, 170, 109);
  } else {
    push();
    imageMode(CENTER);
    image(problem, 651, 304, 66, 66);
    pop();
    image(water1, 685.3, 259, 118.27, 50.15);
    tint(255, opacity);
    image(water2, 685.3, 259, 118.27, 50.15);
    noTint();
  }

  if (fixShower) {
    image(showerText, 110, 234, 165, 103);
  } else {
    push();
    imageMode(CENTER);
    image(problem2, 215, 159, 66, 66);
    pop();
    image(water3, 110.6, 164.5, 98.55, 207.04);
    tint(255, opacity);
    image(water4, 110.6, 164.5, 98.55, 207.04);
    noTint();
  }

  if (bathOpeningBox) {
    image(bathOpeningText, 124, 59, 648, 400);
  }
}

function mousePressed() {
  if (d1 <= 33) {
    fixSink = true;
  }
  if (d2 <= 33) {
    fixShower = true;
  }
  if (d3 <= 20) {
    bathOpeningBox = false;
  }
}
