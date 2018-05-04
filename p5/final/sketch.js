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

var recordSize = 200;

var recordOffset = 210;

var recordXoffset = 10;


function preload() {
  record1 = loadImage("assets/record1.png");
  record2 = loadImage("assets/record2.png");
  record3 = loadImage("assets/record3.png");
}

function setup() {
  // put setup code here
  //var myCanvas = createCanvas(700, 1200);
  var myCanvas = createCanvas(700, 1200);
  myCanvas.parent('can');
  spotify = select("#spotify");


  htmlBack = select("body");

  sel60 = createSelect();
  sel60.position(300, 125);
  sel60.option('select a 60s song');
  sel60.option('Brown Eyed Girl');
  sel60.option('Hit The Road Jack');
  sel60.option('My Girl');
  sel60.option('Sweet Caroline');
  sel60.option('I Heard It Through The Grapevine');
  sel60.changed(mySelectEvent);
  sel60.hide();

  sel70 = createSelect();
  sel70.position(300, 125);
  sel70.option('select a 70s song');
  sel70.option('September');
  sel70.option('Rocket Man');
  sel70.option('Stairway To Heaven');
  sel70.option('Listen To The Music');
  sel70.option('American Pie');
  sel70.changed(mySelectEvent);
  sel70.hide();

  sel80 = createSelect();
  sel80.position(300, 125);
  sel80.option('select an 80s song');
  sel80.option('Billie Jean');
  sel80.option('Dont Stop Believing');
  sel80.option('Sweet Child O Mine');
  sel80.option('Walking On Sunshine');
  sel80.option('Kiss');
  sel80.changed(mySelectEvent);
  sel80.hide();
}


function draw() {
  background("#aaaaaa");
  htmlBack.style("background-color", "#aaaaaa");
  image(record1,recordXoffset,0, recordSize, recordSize);
  image(record2,recordXoffset,recordOffset, recordSize, recordSize);
  image(record3,recordXoffset,recordOffset*2, recordSize, recordSize);
  fill("black");
  text(songLyrics, 300, 50, 400, 1200);
}


function mousePressed(){
  songLyrics = "";
  var rec1Dist = dist(mouseX,mouseY,recordSize/2 + recordXoffset, recordSize/2);
  if(rec1Dist < 175){
    spotify.html(record1Spotify);
    htmlBack.style("background-color", "#538ac8");
    background("#538ac8");
    textFont('Lato');
    textSize(14);
    sel60.show();
    sel70.hide();
    sel80.hide();
  }

  var rec2Dist = dist(mouseX,mouseY,recordSize/2 + recordXoffset, (recordSize/2) + recordOffset);
  if(rec2Dist < 175){
    spotify.html(record2Spotify);
    htmlBack.style("background-color", "#ca5050");
    background("#ca5050");
    textFont('Lato');
    textSize(14);
    sel60.hide();
    sel70.show();
    sel80.hide();
  }

  var rec3Dist = dist(mouseX,mouseY,recordSize/2 + recordXoffset, (recordSize/2) + recordOffset*2);
  if(rec3Dist < 175){
    spotify.html(record3Spotify);
    htmlBack.style("background-color", "#5cbe85");
    background("#5cbe85");
    textFont('Lato');
    textSize(14);
    sel60.hide();
    sel70.hide();
    sel80.show();
  }

}

function mySelectEvent() {
  var item = sel60.value();

  if(item == "Brown Eyed Girl"){
      background("#538ac8")
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
      background("#538ac8")
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
      background("#538ac8")
      songLyrics = "\
       I've got sunshine on a cloudy day.\
       When it's cold outside I've got the month of May.\
      \
       I guess you'd say\
       What can make me feel this way?\
       My girl (my girl, my girl)\
       Talkin' 'bout my girl (my girl).\
      \
       I've got so much honey the bees envy me.\
       I've got a sweeter song than the birds in the trees.\
      \
       Well, I guess you'd say\
       What can make me feel this way?\
       My girl (my girl, my girl)\
       Talkin' 'bout my girl (my girl).\
      \
       Hey hey hey\
       Hey hey hey\
       Ooooh.\
      \
       I don't need no money, fortune or fame.\
       I've got all the riches, baby, one man can claim.\
      \
       Well, I guess you'd say\
       What can make me feel this way?\
       My girl (my girl, my girl)\
       Talkin' 'bout my girl (my girl).\
      \
       I've got sunshine on a cloudy day\
       With my girl.\
       I've even got the month of May\
       With my girl\
       Talkin' 'bout\
       Talkin' 'bout\
       Talkin' 'bout\
       My girl\
       Ooooh\
       My girl\
       As long as I can talk about my girl..."}

    if(item == "Sweet Caroline"){
      background("#538ac8")
      songLyrics = "Where it began\
      I can't begin to knowin'\
      But then I know it's growing strong\
      \
      Was in the spring\
      And spring became the summer\
      Who'd have believed you'd come along\
      \
      Hands, touchin' hands\
      Reachin' out, touchin' me, touchin' you\
      \
      Sweet Caroline\
      Good times never seemed so good\
      I've been inclined\
      To believe they never would\
      But now I...\
      \
      ...look at the night\
      And it don't seem so lonely\
      We fill it up with only two\
      \
      And when I hurt\
      Hurtin' runs off my shoulders\
      How can I hurt when holding you?\
      \
      Warm, touchin' warm\
      Reachin' out, touchin' me, touchin' you\
      \
      Sweet Caroline\
      Good times never seemed so good\
      I've been inclined\
      To believe they never would\
      Oh, no, no\
      \
      Sweet Caroline\
      Good times never seemed so good\
      Sweet Caroline\
      I believe they never could\
      \
      Sweet Caroline\
      Good times never seemed so good\
      ";}

    if(item == "I Heard It Through The Grapevine"){
      background("#538ac8")
      songLyrics = "\
      I bet you're wonderin' how I knew\
      'Bout your plans to make me blue\
      With some other guy you knew before\
      Between the two of us guys\
      You know I loved you more\
      It took me by surprise I must say\
      When I found out yesterday\
      Don't you know that I heard it through the grapevine\
      Not much longer would you be mine\
      Oh I heard it through the grapevine\
      Oh I'm just about to lose my mind\
      \
      Honey, honey yeah.\
      I heard it through the grapevine\
      Not much longer would you be mine baby\
      \
      I know a man ain't supposed to cry\
      But these tears I can't hold inside\
      Losin' you would end my life you see\
      'Cause you mean that much to me\
      You could have told me yourself\
      That you loved someone else\
      Instead I heard it through the grapevine\
      Not much longer would you be mine\
      Oh, I heard it through the grapevine\
      And I'm just about to lose my mind\
      \
      Honey, honey yeah\
      I heard it through the grapevine\
      Not much longer would you be mine, baby\
      \
      People say believe half of what you see\
      Son and none of what you hear\
      But I can't help but be confused\
      If it's true please tell me dear\
      Do you plan to let me go\
      For the other guy you loved before?\
      \
      Don't you know I heard it through the grapevine\
      Not much longer would you be mine, baby yeah\
      I heard it through the grapevine\
      I'm just about to lose my mind\
      Honey, honey, yeah\
      I heard it through the grapevine,\
      Not much longer would you be mine, baby yeah\
      \
      Honey, honey, yeah\
      I heard it through the grapevine,\
      Not much longer would you be mine, baby yeah yeah\
      I heard it through the grapevine,\
      Not much longer would you be mine, baby yeah yeah";}

  var item = sel70.value();

    if(item == "September"){
      background("#ca5050")
      songLyrics = "\
      Do you remember the\
      21st night of September?\
      Love was changing the minds of pretenders\
      While chasing the clouds away\
      \
      Our hearts were ringing\
      In the key that our souls were singing\
      As we danced in the night\
      Remember how the stars stole the night away\
      \
      Ba de ya - say do you remember\
      Ba de ya - dancing in September\
      Ba de ya - never was a cloudy day\
      \
      Ba duda, ba duda, ba duda, badu\
      Ba duda, badu, ba duda, badu\
      Ba duda, badu, ba duda\
      \
      My thoughts are with you\
      Holding hands with your heart to see you\
      Only blue talk and love\
      Remember how we knew love was here to stay\
      \
      Now December found the love we shared in September\
      Only blue talk and love\
      Remember the true love we share today\
      \
      Ba de ya - say do you remember\
      Ba de ya - dancing in September\
      Ba de ya - never was a cloudy day\
      \
      There was a\
      Ba de ya - say do you remember\
      Ba de ya - dancing in September\
      Ba de ya - golden dreams were shiny days\
      \
      The bell was ringing, aha\
      Our souls were singing\
      Do you remember\
      Never a cloudy day\
      \
      There was a\
      Ba de ya - say do you remember\
      Ba de ya - dancing in September\
      Ba de ya - never was a cloudy day\
      \
      There was a\
      Ba de ya - say do you remember\
      Ba de ya - dancing in September\
      Ba de ya - golden dreams were shiny days\
      \
      Ba de ya de ya de ya\
      Ba de ya de ya de ya\
      Ba de ya de ya de ya\
      De ya\
      \
      Ba de ya de ya de ya\
      Ba de ya de ya de ya\
      Ba de ya de ya de ya";
    }

    if(item == "Rocket Man"){
      background("#ca5050")
      songLyrics = "\
      She packed my bags last night pre-flight\
      Zero hour nine A.M.\
      And I'm gonna be high as a kite by then\
      \
      I miss the earth so much, I miss my wife\
      It's lonely out in space\
      On such a timeless flight\
      \
      And I think it's gonna be a long long time\
      'Til touchdown brings me 'round again to find\
      I'm not the man they think I am at home\
      Oh, no, no, no.\
      I'm a rocket man\
      Rocket man burning out his fuse up here alone\
      \
      And I think it's gonna be a long long time\
      'Til touchdown brings me 'round again to find\
      I'm not the man they think I am at home\
      Oh, no, no, no.\
      I'm a rocket man\
      Rocket man burning out his fuse up here alone\
      \
      Mars ain't the kind of place to raise your kids\
      In fact it's cold as hell\
      And there's no one there to raise them if you did\
      \
      And all this science I don't understand\
      It's just my job five days a week\
      A rocket man, a rocket man\
      \
      And I think it's gonna be a long long time\
      'Til touchdown brings me 'round again to find\
      I'm not the man they think I am at home\
      Oh, no, no, no.\
      I'm a rocket man\
      Rocket man burning out his fuse up here alone\
      \
      And I think it's gonna be a long long time\
      'Til touchdown brings me 'round again to find\
      I'm not the man they think I am at home\
      Oh, no, no, no.\
      I'm a rocket man\
      Rocket man burning out his fuse up here alone\
      \
      And I think it's gonna be a long long time...";
    }

    if(item == "Stairway To Heaven"){
      background("#ca5050")
      songLyrics = "There's a lady who's sure all that glitters is gold\
      And she's buying a stairway to heaven.\
      When she gets there she knows, if the stores are all closed\
      With a word she can get what she came for.\
      Ooh, ooh, and she's buying a stairway to heaven.\
      \
      There's a sign on the wall but she wants to be sure\
      'Cause you know sometimes words have two meanings.\
      In a tree by the brook, there's a songbird who sings,\
      Sometimes all of our thoughts are misgiven.\
      \
      Ooh, it makes me wonder,\
      Ooh, it makes me wonder.\
      \
      There's a feeling I get when I look to the west,\
      And my spirit is crying for leaving.\
      In my thoughts I have seen rings of smoke through the trees,\
      And the voices of those who stand looking.\
      \
      Ooh, it makes me wonder,\
      Ooh, it really makes me wonder.\
      \
      And it's whispered that soon, if we all call the tune,\
      Then the piper will lead us to reason.\
      And a new day will dawn for those who stand long,\
      And the forests will echo with laughter.\
      \
      If there's a bustle in your hedgerow, don't be alarmed now,\
      It's just a spring clean for the May queen.\
      Yes, there are two paths you can go by, but in the long run\
      There's still time to change the road you're on.\
      And it makes me wonder.\
      \
      Your head is humming and it won't go, in case you don't know,\
      The piper's calling you to join him,\
      Dear lady, can you hear the wind blow, and did you know\
      Your stairway lies on the whispering wind?\
      \
      And as we wind on down the road\
      Our shadows taller than our soul.\
      There walks a lady we all know\
      Who shines white light and wants to show\
      How everything still turns to gold.\
      And if you listen very hard\
      The tune will come to you at last.\
      When all are one and one is all\
      To be a rock and not to roll.\
      \
      And she's buying a stairway to heaven.";
    }

    if(item == "Listen To The Music"){
      background("#ca5050")
      songLyrics = "Don't you feel it growin', day by day\
      People gettin' ready for the news\
      Some are happy, some are sad\
      Oh, we got to let the music play\
      What the people need\
      Is a way to make 'em smile\
      It ain't so hard to do if you know how\
      Gotta get a message\
      Get it on through\
      Oh, now mama's go'n' to after 'while\
      Oh, oh, listen to the music\
      Oh, oh, listen to the music\
      Oh, oh, listen to the music\
      All the time\
      \
      Well I know, you know better\
      Everything I say\
      Meet me in the country for a day\
      We'll be happy\
      And we'll dance\
      Oh, we're gonna dance our blues away\
      And if I'm feelin' good to you\
      And you're feelin' good to me\
      There ain't nothin' we can't do or say\
      Feelin' good, feeling fine\
      Oh, baby, let the music play\
      \
      Oh, oh, listen to the music\
      Oh, oh, listen to the music\
      Oh, oh, listen to the music\
      All the time\
      \
      Like a lazy flowing river\
      Surrounding castles in the sky\
      And the crowd is growing bigger\
      List'nin' for the happy sounds\
      And I got to let them fly\
      \
      Oh, oh, listen to the music\
      Oh, oh, listen to the music\
      Oh, oh, listen to the music\
      All the time";
    }

    if(item == "American Pie"){
      background("#ca5050")
      songLyrics = "\
      A long, long time ago\
      I can still remember how that music used to make me smile\
      And I knew if I had my chance\
      That I could make those people dance\
      And maybe they'd be happy for a while\
      \
      But February made me shiver\
      With every paper I'd deliver\
      Bad news on the doorstep\
      I couldn't take one more step\
      \
      I can't remember if I cried\
      When I read about his widowed bride\
      But something touched me deep inside\
      The day the music died\
      \
      So bye, bye, Miss American Pie\
      Drove my Chevy to the levee but the levee was dry\
      And them good ole boys were drinking whiskey 'n rye\
      Singin' this'll be the day that I die\
      This'll be the day that I die\
      \
      Did you write the book of love\
      And do you have faith in God above\
      If the Bible tells you so?\
      Now do you believe in rock and roll?\
      Can music save your mortal soul?\
      And can you teach me how to dance real slow?\
      \
      Well, I know that you're in love with him\
      'Cause I saw you dancin' in the gym\
      You both kicked off your shoes\
      Man, I dig those rhythm and blues\
      \
      I was a lonely teenage broncin' buck\
      With a pink carnation and a pickup truck\
      But I knew I was out of luck\
      The day the music died\
      \
      I started singing bye, bye, Miss American Pie\
      Drove my Chevy to the levee but the levee was dry\
      Them good ole boys were drinking whiskey 'n rye\
      Singin' this'll be the day that I die\
      This'll be the day that I die\
      \
      Now for ten years we've been on our own\
      And moss grows fat on a rollin' stone\
      But that's not how it used to be\
      When the jester sang for the king and queen\
      In a coat he borrowed from James Dean\
      And a voice that came from you and me\
      \
      Oh, and while the king was looking down\
      The jester stole his thorny crown\
      The courtroom was adjourned\
      No verdict was returned\
      \
      And while Lenin read a book on Marx\
      The quartet practiced in the park\
      And we sang dirges in the dark\
      The day the music died\
      \
      We were singing bye, bye, Miss American Pie\
      Drove my Chevy to the levee but the levee was dry\
      Them good ole boys were drinking whiskey 'n rye\
      Singin' this'll be the day that I die\
      This'll be the day that I die\
      \
      Helter skelter in a summer swelter\
      The birds flew off with a fallout shelter\
      Eight miles high and falling fast\
      It landed foul on the grass\
      The players tried for a forward pass\
      With the jester on the sidelines in a cast\
      \
      Now the halftime air was sweet perfume\
      While the sergeants played a marching tune\
      We all got up to dance\
      Oh, but we never got the chance\
      \
      'Cause the players tried to take the field\
      The marching band refused to yield\
      Do you recall what was revealed\
      The day the music died?\
      \
      We started singing bye, bye, Miss American Pie\
      Drove my Chevy to the levee but the levee was dry\
      Them good ole boys were drinking whiskey 'n rye\
      And singin' this'll be the day that I die\
      This'll be the day that I die\
      \
      Oh, and there we were all in one place\
      A generation lost in space\
      With no time left to start again\
      So come on, Jack be nimble, Jack be quick\
      Jack Flash sat on a candlestick\
      'Cause fire is the devil's only friend\
      \
      Oh, and as I watched him on the stage\
      My hands were clenched in fists of rage\
      No angel born in Hell\
      Could break that Satan's spell\
      \
      And as the flames climbed high into the night\
      To light the sacrificial rite\
      I saw Satan laughing with delight\
      The day the music died\
      \
      He was singing bye, bye, Miss American Pie\
      Drove my Chevy to the levee but the levee was dry\
      Them good ole boys were drinking whiskey 'n rye\
      And singin' this'll be the day that I die\
      This'll be the day that I die\
      \
      I met a girl who sang the blues\
      And I asked her for some happy news\
      But she just smiled and turned away\
      I went down to the sacred store\
      Where I'd heard the music years before\
      But the man there said the music wouldn't play\
      \
      And in the streets, the children screamed\
      The lovers cried and the poets dreamed\
      But not a word was spoken\
      The church bells all were broken\
      \
      And the three men I admire most\
      The Father, Son and the Holy Ghost\
      They caught the last train for the coast\
      The day the music died\
      \
      And they were singing bye, bye, Miss American Pie\
      Drove my Chevy to the levee but the levee was dry\
      And them good ole boys were drinking whiskey 'n rye\
      Singin' this'll be the day that I die\
      This'll be the day that I die\
      \
      They were singing bye, bye, Miss American Pie\
      Drove my Chevy to the levee but the levee was dry\
      Them good ole boys were drinking whiskey 'n rye\
      And singin' this'll be the day that I die";
    }


  var item = sel80.value();

    if(item == "Billie Jean"){
      background("#5cbe85")
      songLyrics = "She was more like a beauty queen\
      From a movie scene\
      I said, Don't mind, but what do you mean\
      I am the one\
      Who will dance on the floor in the round?\
      She said I am the one\
      Who will dance on the floor in the round\
      \
      She told me her name was Billie Jean\
      As she caused a scene\
      Then every head turned with eyes that dreamed of being the one\
      Who will dance on the floor in the round\
      \
      People always told me, Be careful of what you do.\
      And dont go around breaking young girls hearts.\
      And mother always told me, A be careful of who you love,\
      And be careful of what you do\
      Cause the lie becomes the truth.\
      \
      Billie Jean is not my lover\
      Shes just a girl who claims that I am the one\
      But the kid is not my son\
      She says I am the one\
      But the kid is not my son\
      \
      For forty days and for forty nights\
      Law was on her side\
      But who can stand\
      When shes in demand\
      Her schemes and plans\
      Cause we danced on the floor in the round\
      So take my strong advice\
      Just remember to always think twice\
      (Do think twice, do think twice.)\
      \
      She told, My baby, wed danced til three.\
      Then she looked at me\
      Then showed a photo of a baby cry\
      His eyes looked like mine, oh, no\
      Do a dance on the floor in the round, baby\
      \
      A-people always told me, Be careful of what you do\
      And dont go around breaking young girls hearts.\
      (Dont break no heart.)\
      A-but she came and stood right by me\
      And just the smell of sweet perfume\
      And this happened much too soon\
      And she called me to her room\
      \
      Billie Jean is not my lover\
      Shes just a girl who claims that I am the one\
      But the kid is not my son\
      (No, no, no, no, no, no, no, no.)\
      Billie Jean is not my lover\
      Shes just a girl who claims that I am the one\
      But the kid is not my son\
      She says I am the one\
      But the kid is not my son\
      \
      She says I am the one\
      But the kid is not my son\
      \
      No, no, no\
      \
      Billie Jean is not my lover\
      Shes just a girl who claims that I am the one\
      (No, theres not me, baby.)\
      But the kid is not my son\
      (No, no, no, no, no, no, no.)\
      She says I am the one (No, babe.)\
      But the kid is not my son, no, no, no\
      \
      She says I am the one\
      You know what you did\
      She says he is my son\
      Breaking my heart, babe\
      She says I am the one\
      \
      Billie Jean is not my lover\
      Billie Jean is not my lover\
      Billie Jean is not my lover\
      She is the one\
      Billie Jean is not my lover\
      She is the one\
      Dont call me Billie Jean\
      She is the one\
      Billie Jean is not my lover\
      She is the one\
      Billie Jean is not my lover";
    }

    if(item == "Dont Stop Believing"){
      background("#5cbe85")
      songLyrics = "Just a small town girl\
      Livin' in a lonely world\
      She took the midnight train goin' anywhere\
      \
      Just a city boy\
      Born and raised in South Detroit\
      He took the midnight train goin' anywhere\
      \
      A singer in a smokey room\
      The smell of wine and cheap perfume\
      For a smile they can share the night\
      It goes on and on, and on, and on\
      \
      Strangers waiting\
      Up and down the boulevard\
      Their shadows searching in the night\
      \
      Streetlights people\
      Livin' just to find emotion\
      Hidin' somewhere in the night\
      \
      Workin' hard to get my fill\
      Everybody wants a thrill\
      Payin' anything to roll the dice just one more time\
      \
      Some will win, some will lose\
      Some were born to sing the blues\
      Oh, the movie never ends\
      It goes on and on, and on, and on\
      \
      Strangers waiting\
      Up and down the boulevard\
      Their shadows searching in the night\
      \
      Streetlights people\
      Livin' just to find emotion\
      Hidin' somewhere in the night\
      \
      Don't stop believin'\
      Hold on to that feelin'\
      Streetlight people\
      \
      Don't stop believin'\
      Hold on\
      Streetlight people\
      \
      Don't stop believin'\
      Hold on to that feelin'\
      Streetlight people";
    }

    if(item == "Sweet Child O Mine"){
      background("#5cbe85")
      songLyrics = "She's got a smile that it seems to me\
      Reminds me of childhood memories\
      Where everything\
      Was as fresh as the bright blue sky\
      \
      Now and then when I see her face\
      It takes me away to that special place\
      And if I stared too long\
      I'd probably break down and cry\
      \
      Sweet child o' mine\
      Sweet love of mine\
      \
      She's got eyes of the bluest skies\
      As if they thought of rain\
      I'd hate to look into those eyes\
      And see an ounce of pain\
      \
      Her hair reminds me of a warm safe place\
      Where as a child I'd hide\
      And pray for the thunder and the rain\
      To quietly pass me by\
      \
      Sweet child o' mine\
      Sweet love of mine\
      \
      Sweet child o' mine\
      Sweet love of mine\
      \
      Sweet child o' mine\
      Sweet love of mine\
      \
      Where do we go?\
      Where do we go now?\
      Where do we go?\
      \
      Where do we go?\
      Where do we go?\
      Where do we go now?\
      \
      Where do we go?\
      Sweet child o' mine\
      Where do we go now?\
      \
      Where do we go?\
      Where do we go?\
      Where do we go now?\
      \
      Where do we go?\
      Where do we go now?\
      Where do we go?\
      Where do we go now?\
      \
      Where do we go?\
      Where do we go now, now, now, now, now, now, now now?\
      \
      Sweet child, sweet child o' mine";
    }

    if(item == "Walking On Sunshine"){
      background("#5cbe85")
      songLyrics = "Ow\
      \
      Mm, yeah\
      I used to think maybe you loved me, now, baby, I'm sure\
      And I just can't wait till the day when you knock on my door\
      Now every time I go for the mailbox, gotta hold myself down\
      'Cause I just can't wait till you write me you're coming around\
      \
      Now I'm walking on sunshine, whoa\
      I'm walking on sunshine, whoa\
      I'm walking on sunshine, whoa\
      And don't it feel good\
      Hey, all right now\
      And don't it feel good\
      Hey, yeah\
      \
      I used to think maybe you loved me, now I know that it's true\
      And I don't want to spend my whole life just a-waiting for you\
      Now, I don't want you back for the weekend, not back for a day, no, no, no\
      I said, baby, I just want you back, and I want you to stay\
      \
      Oh, yeah, now I'm walking on sunshine, whoa\
      I'm walking on sunshine, whoa\
      I'm walking on sunshine, whoa\
      And don't it feel good\
      Hey, all right now\
      And don't it feel good\
      Yeah, oh, yeah, now\
      And don't it feel good\
      \
      Walking on sunshine\
      Walking on sunshine\
      \
      I feel alive, I feel the love, I feel the love that's really real\
      I feel alive, I feel the love, I feel the love that's really real\
      I'm on sunshine, baby, oh\
      Oh, yeah, I'm on sunshine, baby\
      \
      Oh, I'm walking on sunshine, whoa\
      I'm walking on sunshine, whoa\
      I'm walking on sunshine, whoa\
      And don't it feel good\
      Hey, all right now\
      And don't it feel good\
      I'll say it, I'll say it, I'll say it again now\
      And don't it feel good\
      Hey, yeah now\
      And don't it feel good\
      Now don't it, don't it, don't it, don't it, don't it, don't it\
      And don't it feel good\
      I'll say it, I'll say it, I'll say it again now\
      And don't it feel good\
      Now don't it, don't it, don't it, don't it, don't it, don't it\
      And don't it feel good\
      Now tell me, tell me, tell me again now\
      And don't it feel good\
      Oh, yeah, now\
      And don't it feel good\
      Oh, don't it feel good, don't it feel good\
      Now don't it feel good\
      Oh, yeah, oh, yeah, oh, yeah\
      And don't it feel good\
      Oh, yeah, yeah, yeah, oh, yeah, oh, yeah\
      And don't it feel good";
    }

    if(item == "Kiss"){
      background("#5cbe85")
      songLyrics = "You don't have to be beautiful\
      To turn me on\
      I just need your body baby\
      From dusk till dawn\
      You don't need experience\
      To turn me out\
      You just leave it all up to me\
      I'm gonna show you what it's all about\
      \
      You don't have to be rich\
      To be my girl\
      You don't have to be cool\
      To rule my world\
      Ain't no particular sign I'm more compatible with\
      I just want your extra time and your\
      \
      Kiss\
      \
      You got to not talk dirty, baby\
      If you wanna impress me\
      You can't be too flirty, mama\
      I know how to undress me (Yeah)\
      I want to be your fantasy\
      Maybe you could be mine\
      You just leave it all up to me\
      We could have a good time\
      \
      You don't have to be rich\
      To be my girl\
      You don't have to be cool\
      To rule my world\
      Ain't no particular sign I'm more compatible with\
      I just want your extra time and your\
      \
      Kiss\
      \
      Yes\
      I think I wanna dance\
      Gotta, Gotta\
      Little girl Wendy's parade\
      Gotta, gotta, gotta\
      \
      Women not girls rule my world\
      I said they rule my world\
      Act your age, mama (Not your shoe size)\
      Not your shoe size\
      Maybe we could do the twirl\
      You don't have to watch Dynasty\
      To have an attitude\
      You just leave it all up to me\
      My love will be your food\
      Yeah\
      \
      You don't have to be rich\
      To be my girl\
      You don't have to be cool\
      To rule my world\
      Ain't no particular sign I'm more compatible with\
      I just want your extra time and your\
      \
      Kiss";
    }
  }
