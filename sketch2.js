let img;

function preload()
{
    img = loadImage("SB-backforth.gif");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("red");
  image(img, 100, 50, mouseX, mouseY)
}

function mousePressed() {
  window.location.href="index.html";
  console.log("clicked");
}
