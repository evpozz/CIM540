var div;

var record1Spotify = '<iframe src="https://open.spotify.com/embed/user/12125965859/playlist/1sUSkPqqNgEQDf7jyaSPko" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';

var record2Spotify = '<iframe src="https://open.spotify.com/embed/user/12125965859/playlist/39DiWRMg33riPNgjl1FIWx" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';

var record3Spotify = '<iframe src="https://open.spotify.com/embed/user/12125965859/playlist/5GekvUCg84A8UPSbDDq1jA" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';


var spotify;
var htmlBack;
var can;

var sel60;
var sel70;
var sel80;

var songLyrics = "";


function preload() {
  record1 = loadImage("assets/record1.png");
  record2 = loadImage("assets/record2.png");
  record3 = loadImage("assets/record3.png");
}

function setup() {
  // put setup code here
  var myCanvas = createCanvas(600, 1200);
  myCanvas.parent('can');

  spotify = select("#spotify");


  htmlBack = select("body");

  sel60 = createSelect();
  sel60.position(300, 100);
  sel60.option('select a 60s song');
  sel60.option('Brown Eyed Girl');
  sel60.option('Hit The Road Jack');
  sel60.option('My Girl');
  sel60.option('Sweet Caroline');
  sel60.option('I Heard It Through The Grapevine');
  sel60.changed(mySelectEvent);
  sel60.hide();

  sel70 = createSelect();
  sel70.position(300, 100);
  sel70.option('select a song');
  sel70.option('September');
  sel70.option('Rocket Man');
  sel70.option('Stairway To Heaven');
  sel70.option('Listen To The Music');
  sel70.option('American Pie');
  sel70.changed(mySelectEvent);
  sel70.hide();

  sel80 = createSelect();
  sel80.position(300, 100);
  sel80.option('select a song');
  sel80.option('Billie Jean');
  sel80.option('Dont Stop Believin');
  sel80.option('Sweet Child OMine');
  sel80.option('Walking On Sunshine');
  sel80.option('Kiss');
  sel80.changed(mySelectEvent);
  sel80.hide();
}

function draw() {
  // put drawing code here
  background(255,255,255,0);
  image(record1,10,0);
  image(record2,10,260);
  image(record3,10,520);
  fill("black");
  text(songLyrics, 300, 50, 250, 1200);

}

function mousePressed(){

  var rec1Dist = dist(mouseX,mouseY,185, 175);
  if(rec1Dist < 175){
    spotify.html(record1Spotify);
    htmlBack.style("background-color", "pink");
    sel60.show();
    sel70.hide();
    sel80.hide();
  }

  var rec2Dist = dist(mouseX,mouseY,185, 475);
  if(rec2Dist < 175){
    spotify.html(record2Spotify);
    htmlBack.style("background-color", "orange");
    sel60.hide();
    sel70.show();
    sel80.hide();
  }

  var rec3Dist = dist(mouseX,mouseY,185, 700);
  if(rec3Dist < 175){
    spotify.html(record3Spotify);
    htmlBack.style("background-color", "yellow");
    sel60.hide();
    sel70.hide();
    sel80.show();
  }

}

function mySelectEvent() {
  var item = sel60.value();

  if(item == "Brown Eyed Girl"){
      background("pink")
      songLyrics = "Hey, where did we go\
       Days when the rains came ? Down in the hollow\
       Playing a new game,\
       Laughing and a-running, hey, hey, Skipping and a-jumping\
       In the misty morning fog with Our, our hearts a-thumping And you, my brown-eyed girl, You, my brown-eyed girl.\
       Whatever happened\
       To Tuesday and so slow\
       Going down to the old mine with a Transistor radio.\
       Standing in the sunlight laughing Hide behind a rainbow's wall, Slipping and a-sliding\
       All along the waterfall\
       With you, my brown-eyed girl, You, my brown-eyed girl.\
       Do you remember when we used to sing Sha la la la la la la la la la la dee dah Just like that\
       Sha la la la la la la la la la la dee dah La dee dah.\
       So hard to find my way\
       Now that I'm all on my own.\
       I saw you just the other day, My, how you have grown!\
       Cast my memory back there, Lord, Sometime I'm overcome thinking about Making love in the green grass Behind the stadium\
       With you, my brown-eyed girl, You, my brown-eyed girl.\
       Do you remember when we used to sing Sha la la la la la la la la la la dee dah Laying in the green grass Sha la la la la la la la la la la dee dah Dee dah dee dah dee dah dee dah dee dah dee Sha la la la la la la la la la la la la Dee dah la dee dah la dee dah la D-d-d-d-d-d-d-d-d-d...\
       ";
    }
  if(item == "Hit The Road Jack"){
      background("pink")
      songLyrics = "Hit the road Jack and don't you come back no more, no more, no more, no more.\
      Hit the road Jack and don't you come back no more. (What you say?)\
      Hit the road Jack and don't you come back no more, no more, no more, no more.\
      Hit the road Jack and don't you come back no more.\
      \
      Oh! Woman, oh woman, don't treat me so mean,\
      You're the meanest old woman that I've ever seen.\
      I guess if you said so\
      I'd have to pack my things and go. (That's right)\
      \
      Hit the road Jack and don't you come back no more, no more, no more, no more.\
      Hit the road Jack and don't you come back no more.\
      \
      Now baby, listen baby, don't-a treat me this-a way\
      Cause I'll be back on my feet some day.\
      \
      Don't care if you do 'cause it's understood\
      You ain't got no money you just ain't no good.\
      \
      Well, I guess if you say so\
      I have to pack my things and go. (That's right)\
      \
      Hit the road Jack and don't you come back no more, no more, no more, no more.\
      Hit the road Jack and don't you come back no more.\
      \
      Don't you come back no more.\
      (What you say)\
      Don't you come back no more\
      (Come on baby)\
      Don't you come back no more}";
    }

  if(item == "My Girl"){
      songLyrics = "INSERT LYRICS HERE";}
  if(item == "Sweet Caroline"){
      songLyrics = "INSERT LYRICS HERE";}
  if(item == "I Heard It Through The Grapevine"){
      songLyrics = "INSERT LYRICS HERE";}

  var item = sel70.value();

    if(item == "September"){
      "INSERT LYRICS HERE"
    }


  var item = sel80.value();

    if(item == "Brown Eyed Girl"){
      "INSERT LYRICS HERE"
    }
  }
