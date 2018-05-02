var song;
// var sliderVolume;
var sliderRate;
var sliderPan;

// functions preload(){
//   song = loadSound("rainbow.mp3");
// }

function setup() {
  // put setup code here
  createCanvas(200,200);
  song = loadSound("rainbow.mp3", loaded);
  song.setVolume(0.5);
  // sliderVolume = createSlider(0, 1, 0.5, 0.01);
  sliderRate = createSlider(0, 3, 1, 0.01);
  sliderPan = createSlider(-1, 1, 0, 0.01);
  // song.play();
}

function loaded() {
  song.play();
}

function draw() {
  background(random(255));
  // song.volume(sliderVolume.value());
  song.rate(sliderRate.value());
  song.pan(sliderPan.value());
}
