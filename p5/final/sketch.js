var div;

var record1 = '<iframe src="https://open.spotify.com/embed/user/jmpozz333/playlist/7vW0NQ33xZ6WCGUk3QRDeW" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';

var record2 = '<iframe src="<iframe src="https://open.spotify.com/embed/user/samihiggins/playlist/16YilE5O2WiJ0XFFhEnwDQ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>>'

var record3 = '<iframe src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DX4UtSsGT1Sbe" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'


var spotify;
var htmlBack;

function preload() {
  record1 = loadImage("assets/record1.png");
}

function setup() {
  // put setup code here
  createCanvas(400,400);

  spotify = createDiv("");
  spotify.style("display", "inline-block");
  htmlBack = select("body");
  // htmlBack.style("background-color", "blue");
}

function draw() {
  // put drawing code here
  background(255,255,255,0);
  image(record1,0,0);
}

function mousePressed(){


  spotify.html(record1, true);

}
