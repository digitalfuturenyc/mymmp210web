// Font "otf file" located in font folder.
var myFont;
function preload() {
  myFont = loadFont("font/Brutus Type.otf");
}


function setup() {
  createCanvas(1000, 1000);           
}
function draw() {

//Text style
var ts = 200;
var LineNumber = 1;


//Text position    
var y = 300;
var x = 300;


textSize(ts)
background('black');

    
     
  //Line one "Pirate"
  fill(255);
  textFont(myFont);
  text("Pirate", x, y + ts*LineNumber);
  LineNumber = LineNumber + 1;
    

  //Libe two "Code" 
  fill('red');
  text("Code", y, x + ts*LineNumber);
  LineNumber +=1;
      
 
}