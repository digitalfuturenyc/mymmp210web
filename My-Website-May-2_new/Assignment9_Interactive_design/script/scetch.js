var quantity = 300;
var xPosition = [];
var yPosition = [];
var flakeSize = [];
var direction = [];
var minFlakeSize = 1;
var maxFlakeSize = 5;
var snowColor = 255;
var blackcolor = 0;

function setup() {
  createCanvas(1200, 1000);
  frameRate(30);
  noStroke();
  
  for(var i = 0; i < quantity; i++) {
    flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
    xPosition[i] = random(0, width);
    yPosition[i] = random(0, height);
    direction[i] = round(random(0, 1));
  }
}

function draw() {
  background(blackcolor);
  fill(snowColor);
  rect(0,height*(4/5),width,height/5);
  drawSnowMan();
  drawSnow();
}

function drawSnow() {
	for(var i = 0; i < xPosition.length; i++) {
    
    ellipse(xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);
    
    if(direction[i] == 0) {
      xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
    } else {
      xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
    }
    
    yPosition[i] += flakeSize[i] + direction[i]; 
    
    if(xPosition[i] > width + flakeSize[i] || xPosition[i] < -flakeSize[i] || yPosition[i] > height + flakeSize[i]) {
      xPosition[i] = random(0, width);
      yPosition[i] = -flakeSize[i];
    } 
  }
}

function drawSnowMan() {
  
 
  
  //home body
  fill("red")
  rect(100, 600, 50, 200);
  
 
  // moon var
    var x = 900;
    var y = 200;
    var moonWidth = 300;
    var moonHeight = moonWidth/1;
    
  //moon
  fill("blue")
   ellipse(x, y, moonWidth, moonHeight);
   //sn color
    fill("white");
     

 
}
function mouseClicked() {
  if (value == 0) {
    value = 255;
  } else {
    value = 0;
  }
}
