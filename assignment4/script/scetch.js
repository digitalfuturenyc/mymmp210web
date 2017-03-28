var ball;													                      
var xSpeed;												                        	
var ySpeed;													                        
var clicked = false;										                    

function setup() {											                    
	createCanvas(900, 600);								                  

	xSpeed = Math.floor((Math.random() * 100) + 20);		      // random speed and angle
	ySpeed = Math.floor((Math.random() * 80) + 100);

	ball = new Ball(ySpeed, xSpeed, mouseX, mouseY);		      // new ball object
}

function draw() {											                      

	background(0);											                      
	textSize(80);
	text("MMP210", width - 800, 100);

	if(clicked) {											                        //clicks
															                             
		ball.show();
		ball.update();		
	}
}

function mouseClicked() {									                  // mouseClicked function used to control when 

	xSpeed = Math.floor((Math.random() * 20));
	ySpeed = Math.floor((Math.random() * 80));

	ball = new Ball(ySpeed, xSpeed); 						              // new ball  
	clicked = true;											                      
}

function Ball(ySpeed, xSpeed) {								              // ball object

	this.y = mouseY;										                      // mouseY position
	this.x = mouseX;										                      // mouseX position

	this.xSpeed = xSpeed;									                    // posX ball speed
	this.ySpeed = ySpeed;									                    // posY ball speed/angle

	this.gravity = 1;										                      // gravity
	this.velocity = 0;										                    // velocity 

	// change colors //
	var c = color(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255));

	this.show = function() {

		fill(c);											                          // ball colou
		ellipse(this.x, this.y, 16, 16);					              // ball size position

		if(this.y > height) {								                    // prevent ball from falling
			this.y = height;
			this.velocity *= -0.5;							                  // add velocity

		} else if(this.x > width) {
			this.x = width;									                      // not allow ball from moving past 
		} else {
			this.x += this.xSpeed;							                  // forward ball motion
		}						
	}

	this.update = function() {
		this.velocity += this.gravity;						              // gravity
		this.y += this.velocity;							                  
	}
}
