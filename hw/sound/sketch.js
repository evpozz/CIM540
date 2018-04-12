
function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  background(255);

}

function preload() {
  soundFormats('mp3');
  mySound = loadSound('assets/september.mp3');
}

function setup() {
  mySound.setVolume(0.1);
  mySound.play();
}
