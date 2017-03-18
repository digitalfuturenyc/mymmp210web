function setup() { 
	createCanvas(640, 480);
	background("black");
	noStroke();
	
	// head
	fill("orange");
	ellipse(300, 300, 300, 335);
	
	// eyes
	fill("yellow");
	ellipse(250, 220, 65, 30);
	ellipse(350, 220, 65, 30);
    
    // eyes
	fill("black");
	ellipse(250, 220, 20, 30);
	ellipse(350, 220, 20, 30);
    
    // nose
    fill("yellow");
	stroke("yellow");
    
    triangle(300, 240, 330, 300, 270, 300);

	
	// mouth
	fill("red");
    strokeWeight(0);
	triangle(300, 430, 330, 400, 270, 400);
	
	
	// ear
	fill("orange");
	ellipse(450, 280, 40, 90, PI+10, HALF_PI+1);

// ear
	fill("orange");
	ellipse(150, 280, 40, 90, PI+0, HALF_PI+0);
}