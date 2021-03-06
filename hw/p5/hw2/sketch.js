var centerX = 200;
var centerY = 200;

function setup() {
  // put setup code here
  createCanvas(600,600);
  background(255);
}

function draw() {
  // put drawing code here
  background(255);

  stroke(0);
  strokeWeight(2);
  fill("white");
  rect(centerX -160,centerY -150,300,300);

  stroke(0);
  strokeWeight(1);
  fill("white");
  rect(centerX -150,centerY -100,100,100);
  ellipse(centerX -100,centerY -50,50,50);
  rect(centerX +25,centerY -100,100,100);
  ellipse(centerX + 75,centerY -50,50,50);
  // rect(centerX -225,centerY -200,225,225);

  stroke(125);
  strokeWeight(5);
  point(centerX,centerY);

  stroke(255,0,0);
  line(centerX -50,centerY +50,centerX +50,centerY +50);

  noStroke();
  fill(0,0,255);
  triangle(centerX,centerY,centerX +25,centerY +25,centerX -25,centerY +25);

  stroke(0);
  strokeWeight(2);
  line(centerX,centerY +350,centerX,centerY +150);

  stroke(0);
  strokeWeight(2)
  line(centerX +300,centerY +600,centerX,centerY +350);

  stroke(0);
  strokeWeight(2)
  line(centerX -300,centerY +600,centerX,centerY +350);

  stroke(0);
  strokeWeight(2)
  line(centerX +150,centerY +200,centerX,centerY +250);

  stroke(0);
  strokeWeight(2)
  line(centerX -150,centerY +200,centerX,centerY +250);

}
