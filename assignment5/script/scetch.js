function setup() {
  createCanvas(1000, 1100);  
}

function draw() {
  background("black");
  
var glassColor = ("blue");
var topofthewindowColor = ("brown");
var bodycolor = ("yellow");

var windowWidth = width/1; // window width
var windowHeight = height/1; // window height
    
for ( var x = windowWidth/2.9; x < width; x+=windowWidth) {
for (var y = windowHeight/3.7; y < height; y+=windowHeight) {

    

// body of the window outside//
fill(252, 108, 133);
rect(320, 270, 300, 500);

// Glass of the window inside //
fill(bodycolor);
rect(335, 285, 270, 470);
    
// triangle top of the window //
fill (topofthewindowColor);
triangle(310, 270, 475, 200, 630, 270);
    
// glass //
fill(glassColor);
stroke ("white");
rect(x, y, windowWidth/8, windowHeight/12);
rect(x, y + windowHeight/11, windowWidth/8, windowHeight/12);
rect(x + windowWidth/8, y + windowHeight/12000, windowWidth/8, windowHeight/12);
rect(x + windowWidth/8, y + windowHeight/11, windowWidth/8, windowHeight/12);
rect(x + windowWidth/8, y + windowHeight/5.5, windowWidth/8, windowHeight/12);
rect(x, y + windowWidth/5, windowWidth/8, windowHeight/12)
rect(x, y + windowWidth/5, windowWidth/8, windowHeight/12)
rect(x + windowWidth/1200, y + windowHeight/7.3 * 2, windowWidth/4, windowHeight/8);




    
    

     }
    
    }
    
    
}

