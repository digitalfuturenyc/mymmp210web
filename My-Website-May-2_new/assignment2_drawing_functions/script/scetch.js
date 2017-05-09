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
  createCanvas(1000, 800);
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
  var centerX = width/2;
  var centerY = height/2 + 30;
  var offsetHand = 30;
  stroke(100);
  
  //home body
  fill(snowColor)
  rect(360, 500, 400, 450);

  // door
  stroke(100);
  fill(snowColor)
  rect(460, 650, 100, 150);
  
  //moon
  fill("snowColor")
  ellipse(centerX,70,60,60);
  fill("snowColor");
     
  //Roof
    stroke(100);
 triangle(330, 500, 790, 500, 570, 300);
 
}
