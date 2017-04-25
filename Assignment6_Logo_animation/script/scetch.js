// Font "otf file" located in font folder.
var myFont;
var offset = 0;
function preload() {
  myFont = loadFont("font/Brutus Type.otf");
}


function setup() {
  createCanvas(1000, 1000);           
}
function draw() {

//Text SIZE
var ts = 200;
var LineNumber = 1;


//Text position    
var y = 300;
var x = 300;
var r = 0;

textSize(ts)
background('black');

    
 

  //Line one "Pirate"
  fill(255);
  textFont(myFont);
  text("Pirate", x, y + ts*LineNumber);

  LineNumber = LineNumber + 1;
 
    

  //Libe two "Code" 
  fill(random(255),0,random(2))
  text("Code", y, x + ts*LineNumber);
  LineNumber +=1;
  
   
    
 //Ellipse run lines"    
  for(var x = 0; x <= width; x = x + 60) {
    fill(random(255),0,random(10))
    ellipse(x + offset ,250, 25,25);
      
      
    fill(random(255),0,random(10))
    ellipse(x + offset ,800, 25,25);
  }
  
  offset = offset + 1;
 
    
}


