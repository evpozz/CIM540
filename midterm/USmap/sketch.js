var centerX = 500;
var centerY = 250;

var usMap;

var miami = false;
var miamiImg;

var newyork = false;
var newyorkImg;

var neworleans = false;
var neworleansImg;

var vegas = false;
var vegasImg;

var sanfran = false;
var sanfranImg;

function preload() {
  usMap = loadImage("assets/usMap.png");
  miamiImg = loadImage("assets/miami.jpg");
  newyorkImg = loadImage("assets/newyork.jpg");
  neworleansImg = loadImage("assets/neworleans.jpg");
  vegasImg = loadImage("assets/vegas.jpg");
  sanfranImg = loadImage("assets/sanfran.jpg");
}

function setup() {
  // put setup code here
  createCanvas(1000,500);
}

function draw() {
  // put drawing code here
  background(255);
  image(usMap,0,0);
  textSize(26);
  console.log(mouseX + " " + mouseY);

  if(miami == true){
    image(miamiImg,755,265);
    text("Miami", 755,255);
  }
  if(newyork == true){
    image(newyorkImg,560,130);
    text("New York",560,120);
  }
  if(neworleans == true){
    image(neworleansImg,370,120);
    text("New Orleans",370,110);
  }
  if(vegas == true){
    image(vegasImg,210,60);
    text("Las Vegas",210,50);
  }
  if(sanfran == true){
    image(sanfranImg,95,35);
    text("San Francisco",95,25);
  }
}

function mousePressed(){
  var miamiDist = dist(mouseX,mouseY, 760, 430);
  if(miamiDist < 20){
    miami = true;
  }else{
    miami = false;
  }
  var newyorkDist = dist(mouseX,mouseY, 800, 130);
  if(newyorkDist < 20){
    newyork = true;
  }else{
    newyork = false;
  }
  var neworleansDist = dist(mouseX,mouseY, 580, 360);
  if(neworleansDist < 30){
    neworleans = true;
  }else{
    neworleans = false;
  }
  var vegasDist = dist(mouseX,mouseY, 190, 220);
  if(vegasDist < 50){
    vegas = true;
  }else{
    vegas = false;
  }
  var sanfranDist = dist(mouseX,mouseY, 65, 185);
  if(sanfranDist < 30){
    sanfran = true;
  }else{
    sanfran = false;
  }
}
