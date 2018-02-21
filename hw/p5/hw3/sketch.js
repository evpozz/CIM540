var centerX = 200;
var centerY = 200;

var backgroundColor = "white";

var button;
var button2;

var sel;
var eyeColor = "black";

function setup() {
  // put setup code here
  createCanvas(600,600);
  background(255);
  button = createButton("Hello");
  button.mousePressed(changeBG);
  button2 = createButton("Goodbye");
  button2.mousePressed(function(){
    backgroundColor = "black";
  });

  sel = createSelect();
  sel.option("blue");
  sel.option("green");
  sel.option("brown");

  sel.changed(function(){
    eyeColor = sel.value();
  });
}

function draw() {
  // put drawing code here
  background(backgroundColor);
  centerX = mouseX;
  centerY = mouseY;

  stroke(0);
  strokeWeight(2);
  fill("white");
  rect(centerX -160,centerY -150,300,300);

  stroke(0);
  strokeWeight(1);
  fill("white");
  rect(centerX -150,centerY -100,100,100);
  // eye1
  var xOffset = map(mouseX, 0, width, -20,20);
  var yOffset = map(mouseY, 0, height, -20,20);

  console.log("xOffset: ", xOffset + " yOffset: " + yOffset);
  fill(eyeColor);
  ellipse(centerX -100,centerY -50,50,50);
  fill("white");
  rect(centerX +25,centerY -100,100,100);
  // eye2
  fill(eyeColor);
  ellipse(centerX + 75,centerY -50,50,50);
  // rect(centerX -225,centerY -200,225,225);

  stroke(125);
  strokeWeight(5);
  point(centerX,centerY);

  // mouth
  stroke(255,0,0);
  line(centerX -50,centerY +50,centerX +50,centerY +50);

  // nose
  noStroke();
  fill(0,0,255);
  triangle(centerX,centerY,centerX +25,centerY +25,centerX -25,centerY +25);

  // body
  stroke(0);
  strokeWeight(2);
  line(centerX,centerY +350,centerX,centerY +150);

  // rightleg
  stroke(0);
  strokeWeight(2)
  line(centerX +300,centerY +600,centerX,centerY +350);

  // leftleg
  stroke(0);
  strokeWeight(2)
  line(centerX -300,centerY +600,centerX,centerY +350);

  // rightarm
  stroke(0);
  strokeWeight(2)
  line(centerX +150,centerY +200,centerX,centerY +250);

  // leftarm
  stroke(0);
  strokeWeight(2)
  line(centerX -150,centerY +200,centerX,centerY +250);

}

// function mousePressed(){
//   backgroundColor = "green";
// }
//
// function mousePressed(){
//   backgroundColor = "purple";
// }

function changeBG(){
  backgroundColor = "blue";
}
