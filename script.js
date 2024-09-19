

/* VARIABLES */

//Audio 
let punch, song;

//The notes
let note1, note2, note3, note4, note5, note6, note7, note8, note9, note10, note11, note12, note13, note14, note15, note16, note17, note18, note19, note20, note21, note22, note23, note24, note25, note26, note27, note28, note29, note30, note31, note32, note33, note34, note35, note36, note37, note38,note39, note40;
//The frame/time
let time = -3;

//Whether to keep track of the frame/time
let boo = false;

//idk its not used rn
let count = 0;

//The frames where there is a note that needs to be dropped
let nums = [];

//Puts the lists of each lane in a list so its easier to call
let lanes = [];

//Which lane that note needs to be dropped in (1,2,3,4)
let laneNums = [];

//A list of all the notes (used to check which notes to move)
let allNotes = [];

//These lists hold the notes in each lane
let lane1 = [];
let lane2 = [];
let lane3 = [];
let lane4 = [];

//These variables hold the index of the next available note
let indexOne, indexTwo, indexThree, indexFour;

//Holds all notes in all lanes
let allLanes;

//Player's points
let points;

//Holds notes currently on screen
let onScreen;

/* PRELOAD LOADS FILES */
function preload(){
  song = loadSound('assets/audio/irregular_short.mp3');
  punch = loadSound('assets/audio/punch.wav');
}

/* SETUP RUNS ONCE */
function setup() {
  song.setVolume(0.3);
  note1 = new Note(130);
  note2 = new Note(130);
  note3 = new Note(130);
  note4 = new Note(130);
  note5 = new Note(130);
  note6 = new Note(130);
  note7 = new Note(130);
  note8 = new Note(130);
  note9 = new Note(130);
  note10 = new Note(130);
  note11 = new Note(210);
  note12 = new Note(210);
  note13 = new Note(210);
  note14 = new Note(210);
  note15 = new Note(210);
  note16 = new Note(210);
  note17 = new Note(210);
  note18 = new Note(210);
  note19 = new Note(210);
  note20 = new Note(210);
  note21 = new Note(290);
  note22 = new Note(290);
  note23 = new Note(290);
  note24 = new Note(290);
  note25 = new Note(290);
  note26 = new Note(290);
  note27 = new Note(290);
  note28 = new Note(290);
  note29 = new Note(290);
  note30 = new Note(290);
  note31 = new Note(370);
  note32 = new Note(370);
  note33 = new Note(370);
  note34 = new Note(370);
  note35 = new Note(370);
  note36 = new Note(370);
  note37 = new Note(370);
  note38 = new Note(370);
  note39 = new Note(370);
  note40 = new Note(370);
  
  
  nums = [78, 90, 100, 112, 141, 176, 198, 240, 280,318, 347, 371, 399, 499, 522, 534, 582,633, 694, 720, 727, 739, 751, 766, 782, 795, 814, 823, 838, 853, 869, 884,905, 919, 929, 939, 955, 973, 1072, 1081, 1091, 1104, 1115, 1132, 1146, 1160, 1171, 1180, 1189,1204, 1221, 1236, 1249, 1256, 1270, 1278, 1292, 1307, 1321];
  laneNums = [1,3,2,4,3,2,1,2,3,4,4,4,2,3,1,4,1,4,3,2,2,1,2,3,2,1,3,3,2,3,4,3,4,4,3,2,1,1,2,2,1,3,4,3,4,3,3,2,1,2,4,1,3,3,2,3,4,3,2];
  allLanes = [[note1, note2, note3, note4, note5, note6, note7, note8, note9, note10], [note11, note12, note13, note14, note15, note16, note17, note18, note19, note20], [note21, note22, note23, note24, note25, note26, note27, note28, note29, note30], [note31, note32, note33, note34, note35, note36, note37, note38,note39, note40]];
  //lane1 = [note1,note2];
  //lane2 = [note3,note4];
  //lane3 = [note5,note6];
  //lane4 = [note7,note8];
  //lanes = [0,lane1,lane2,lane3,lane4];
  indexOne = 0;
  indexTwo = 0;
  indexThree = 0;
  indexFour = 0;
  //laneVar = [0,oneNote, twoNote, threeNote, fourNote];
  allNotes = [note1, note2, note3, note4, note5, note6, note7, note8, note9, note10, note11, note12, note13, note14, note15, note16, note17, note18, note19, note20, note21, note22, note23, note24, note25, note26, note27, note28, note29, note30, note31, note32, note33, note34, note35, note36, note37, note38,note39, note40];

  onScreen = [];

  points = 0;
  //top half of bg
  createCanvas(500,500);
   
  
  //Create catcher 
    
  /*
    good = new Sprite();
    good.width = 500;
  good.color = 'green';
    good.height = 120;
    good.collider = 'n';
    good.pos = {x:250,y:350};
  perfect = new Sprite();
  perfect.color = 'cyan';
    perfect.width = 500;
    perfect.height = 60;
    perfect.collider = 'n';
    perfect.pos = {x:250,y:350};
  */
  /*
  note1 = new Sprite(130,0);
  note1.d = 50;
  note1.color = 'red';
  note1.collider = 'k';
  note1.velocity.y = 0;
  note2 = new Sprite(210,0);
  note2.d = 50;
  note2.color = 'orange';
  note2.collider = 'k';
  note2.velocity.y = 0;
  note3 = new Sprite(290,0);
  note3.d = 50;
  note3.color = 'white';
  note3.collider = 'k';
  note3.velocity.y = 0;
  */
  /*
  note4 = new Sprite(370,0);
  note4.d = 50;
  note4.color = 'purple';
  note4.collider = 'k';
  note4.velocity.y = 0;
  */
  
}

/* DRAW LOOP REPEATS */
function draw() {
  if (song.isLoaded()){
    boo = true;
  }
  if (time ==2){
    song.play();
  }
  background(0);
  noStroke();

  //Sets up the hit bar
  fill('green');
  rect(0,290,500,120);
  fill('cyan');
  rect(0,320,500,60);
  fill('white');
  textSize(25);
  stroke(0);
  strokeWeight(3);
  text("D", 120, 355);
  text("F", 200, 355);
  text("J", 280, 355);
  text("K", 360, 355);


  //Drops note when time matches
  if (time+80 == nums[0]){
    if (laneNums[0]==1){
      allLanes[0][indexOne].toggleShow();
      allLanes[0][indexOne].toggleMoving();
      onScreen.push(allLanes[0][indexOne]);
      if (indexOne != 9){
        indexOne++;
      } else {
        indexOne = 0;
      }
    }else if(laneNums[0]==2){
      allLanes[1][indexTwo].toggleShow();
      allLanes[1][indexTwo].toggleMoving();
      onScreen.push(allLanes[1][indexTwo]);
      if (indexTwo != 9){
        indexTwo++;
      } else {
        indexTwo = 0;
      }
      
    }else if (laneNums[0]==3){
      allLanes[2][indexThree].toggleShow();
      allLanes[2][indexThree].toggleMoving();
      onScreen.push(allLanes[2][indexThree]);
      if (indexThree != 9){
        indexThree++;
      } else {
        indexThree = 0;
      }
      
    }else if (laneNums[0]==4){
      allLanes[3][indexFour].toggleShow();
      allLanes[3][indexFour].toggleMoving();
      onScreen.push(allLanes[3][indexFour]);
      if (indexFour != 9){
        indexFour++;
      } else {
        indexFour = 0;
      }
    }
    //Remove the note that was just released
    nums.shift();
    laneNums.shift();
  }

  
  //Count frame/time
  if (boo){
    time++;
  }

  for (let i = 0; i < allNotes.length; i++){
    if (allNotes[i].getMoving()){
      allNotes[i].move();
    }
    if (allNotes[i].getShow()){
      allNotes[i].show();
    }
  }

  if (onScreen.length>0&&onScreen[0].getY() > 385){
    onScreen[0].resetNote();
    onScreen.shift();
    points = points -50;
  }
  
  /*
  if (note1.getY()>348){
    note1.toggleMoving();
    fill('white');
    textSize(12);
    text(time, 20, 20);
    boo=false;
  }
  */
//Output the good/perfect/miss and the position
  fill('white');
  textSize(12);
  strokeWeight(1);
  text("Points: " + points, 300, 20);

  /*
  // Checking when the note is in the middle of perfect for when we are creating beatmap
if (note.y > 348){
  note.velocity.y = 0;
  fill(255,255,255);
  textSize(12);
  text(time + ''+note.y,50,50);
  boo = false;
}
*/
  
  //Checking if the note is a miss, good, or perfect
  //Lane 1
  
  if (kb.presses('d')){
    punch.play();
    if (onScreen.length>0 && onScreen[0].getLane() == 1){
      if (onScreen[0].getY() >= 345 && onScreen[0].getY() <= 355){
      points = points + 100;
      onScreen[0].resetNote();
      onScreen.shift();
    } else if (onScreen[0].getY() >= 315){
      points = points + 75;
      onScreen[0].resetNote();
      onScreen.shift();
    }else {
        points = points - 50;
      }
    }else {
      points = points - 50;
    }
  }
  
  //Lane 2
  if (kb.presses('f')){
    punch.play();
    if (onScreen.length>0 && onScreen[0].getLane() == 2){
      if (onScreen[0].getY() >= 345 && onScreen[0].getY() <= 355){
      points = points + 100;
      onScreen[0].resetNote();
      onScreen.shift();
    } else if (onScreen[0].getY() >= 315){
      points = points + 75;
      onScreen[0].resetNote();
      onScreen.shift();
    }else {
        points = points - 50;
      }
    }else {
      points = points - 50;
    }
  }
  
  //Lane 3
  if (kb.presses('j')){
    punch.play();
    if (onScreen.length>0 && onScreen[0].getLane() == 3){
      if (onScreen[0].getY() >= 345 && onScreen[0].getY() <= 355){
      points = points + 100;
      onScreen[0].resetNote();
      onScreen.shift();
    } else if (onScreen[0].getY() >= 315){
      points = points + 75;
      onScreen[0].resetNote();
      onScreen.shift();
    } else {
      points = points - 50;
    }
    }else {
      points = points - 50;
    }
  }
 
  //Lane 4 
  if (kb.presses('k')){
    punch.play();
    if (onScreen.length>0 && onScreen[0].getLane() == 4){
      if (onScreen[0].getY() >= 345 && onScreen[0].getY() <= 355){
      points = points + 100;
      onScreen[0].resetNote();
      onScreen.shift();
    } else if (onScreen[0].getY() >= 315){
      points = points + 75;
      onScreen[0].resetNote();
      onScreen.shift();
    }else {
        points = points - 50;
      }
    }else {
      points = points - 50;
    }

  }

  
  
 /*
 //Testing start/stopping of music on click
  fill(0);
  if (mouse.released() && count == 0) {
    song.play();
    boo = true;
    count++;
  }
  if (mouse.released() && count == 1) {
    song.stop();
  }
  if (boo){
    time++;
    if (kb.presses(' ')){
      print(time);
    }
  }
  */
}

//Drops the note
//function dropLane(note){
//  note.move();
//}

//Note object class
class Note{
  constructor(x){
    this.x = x;
    this.y = -100;
    this.moving = false;
    this.showing = false;
  }

  move(){
    this.y = this.y+5;
  }


  setY(y){
    this.y = y;
  }

  getY(){
    return this.y;
  }
  
  toggleMoving(){
    if (this.moving == false){
      this.moving = true;
    } else{
      this.moving = false;
    }
  }

  getMoving(){
    return this.moving;
  }

  toggleShow(){
    if (this.showing == false){
      this.showing = true;
    } else{
      this.showing = false;
    }
  }

  getShow(){
    return this.showing;
  }

  getLane(){
    if (this.x == 130){
      return 1;
    }
    if (this.x == 210){
      return 2;
    }
    if (this.x == 290){
      return 3;
    }
    if (this.x == 370){
      return 4;
    }
  }
  // Makes note visible based on which lane it is in
  show(){
    stroke(255);
    strokeWeight(4);
    if (this.x == 130){
      fill('red');
    }
    if (this.x == 210){
      fill('orange');
    }
    if (this.x == 290){
      fill('yellow');
    }
    if (this.x == 370){
      fill('purple');
    }
    ellipse(this.x,this.y, 50,50);
  }

  resetNote(){
    this.y = -100;
    this.showing = false;
    this.moving = false;
  }
}

