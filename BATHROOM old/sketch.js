let fix1 = false;
let fix2 = false;
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
let d1;
let d2;
let offset = 0;

function preload() {
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
  createCanvas(1280, 740);
}

function draw() {
  d1 = dist(mouseX, mouseY, 920, 430);
  d2 = dist(mouseX, mouseY, 300, 210);
  background("#707F99");
  image(tile, 0, 640, width, 100);
  image(toilet, 510, 331, 250, 350);
  image(sink, 891, 301, 315, 390);
  image(mirror, 934, 27, 223, 258);
  image(painting, 640, 89, 186, 207);
  image(shelf, 57, 46, 379, 110);
  image(shower, 57, 168, 395, 524);
  let opacity = map(sin(offset), -1, 1, 0, 255);
  offset += 0.4;

  if (fix1) {
    //add sink box here
  } else {
    push();
    imageMode(CENTER);
    image(problem, 920, 430, 86, 86);
    pop();
    image(water1, 979, 370, 168, 71);
    tint(255, opacity);
    image(water2, 979, 370, 168, 71);
    noTint();
  }

  if (fix2) {
    //add shower box here
  } else {
    push();
    imageMode(CENTER);
    image(problem2, 300, 210, 86, 86);
    pop();
    image(water3, 158, 235, 140, 295);
    tint(255, opacity);
    image(water4, 158, 235, 140, 295);
    noTint();
  }
}

function mousePressed() {
  if (d1 <= 43) {
    fix1 = true;
  }
  if (d2 <= 43) {
    fix2 = true;
  }
}
