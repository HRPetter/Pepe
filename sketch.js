let lli;
let islooping = true ;

var npos = 100;
var x = new Array (npos);
var y = new Array (npos);
  
function preload() {
    lli = loadImage('lli_comp.jpg');
}

function setup() {
  createCanvas(700,700);
  innit() ;
  
}

function innit() { // initialises the drawing
  //noLoop() ;
  frameCount=0 ;

  image(lli, 0, 0);
  stroke(7,7,7); 

}


function draw() {
  if (this._loop) { // draws when loop is active
    var size = 50;
    image(lli, 0, 0);
  
    
  
    size = constrain(frameCount, 0, 100);
    
    // shifting values to the right
   for (var i = npos-1; i > 0; i--) {
     console.log(x[i])
     x[i] = x[i-1] ;
     y[i] = y[i-1] ;

     
   }  
    
 // store value of x and y in first array spot
 x[0] = mouseX;
 y[0] = mouseY;
 // draw the pepettes
 for (var i = npos-1; i >= 0; i--) {
   var tailPepeSize =  constrain(size-(i*2), 0, 100);
   
   if ( (x[i] != null) & (y[i] != null)) {
     pepe(x[i], y[i], tailPepeSize);
   }
 }
   }
 }

function keyPressed() { // it checks for up arrow being pressed and turns looping on and off

  if (keyCode == UP_ARROW) {  // stop when Up Arrow  is pressed
    if (islooping) {
      noLoop();
      islooping = false; // turned off looping
    }
    else if (islooping == false){
      loop();
      islooping = true;
    }
  }
  else if (keyCode == ENTER) {
    innit () ;      // when enter is pressed drawing restarts
  }
}

function pepe(x,y,w) {
//this is green frog head
fill(68,142,41);
ellipse(x, y, w, w);

//this is red rectangle frog mouth
fill(255,44,0);
rect(x-w*0.5, y+w*0.167, w*0.8, w*0.03);

//Two yellow eyes
fill(189,144,16);
ellipse(x-w*0.43, y-w*0.167, w*0.33, w*0.33);
ellipse(x+w*0.23, y-w*0.167, w*0.33, w*0.33);

//Left green pupils
fill(27,137,10);
ellipse(x-w*0.43, y-w*0.167, w*0.13, w*0.13);
//Right squinty green pupil
ellipse(x+w*0.23, y-w*0.167, w*0.27, w*0.046);
}
