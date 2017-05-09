
function setup() {
    createCanvas(640, 640);
    background("black");
    
	
    
    var numberOfRectangles = 2000;
    var columns = Math.sqrt(numberOfRectangles);
    var rows = Math.sqrt(numberOfRectangles);
    
;
    
    var w = width / columns;
    var h = height / rows;

    for (var x = 0; x <= width; x += w) {
        for (var y = 0; y <= height; y += h) {
            
            var r, g, b;
            var tempX = x;
            var tempW = w;
            var tempH = h;
            
         // stars
            if (y < height/1.3) {
                // random stars color
              
                r = random(0, 0);
                g = random(150, 255);
                b = random(150, 200);
                //random stars size and p
                x += random(-2600, 1600);
                w = random(10, 1);
				
		     //  earth Size
             ellipse(450, 110, 200, 200);
				
				
				
            } else if (y > height * 3/4) {
                
				// random moon color
                r = random(100, 120);
                g = random(120, 150);
                b = random(120, 150);
                
            } 
            
            // all of the color fills
            fill(r,g, b);            
            
               
		    // moon size and position
            if ( y > height * 3/4) {
            ellipse(300, 700, 900, 600);
				}
			
			
			else {
                // earth color
                rect(x, y, w, h);
				fill(
                    random(20, 60),
                    random(100, 130),
                    random(200, 255)
                );
            }
			
			if ( y > height * 3/4) {
               //moon creators
                ellipse(x, y, w, h)
                fill(
                    random(90, 100),
                    random(100, 117),
                    random(100, 117)
                );
              
			//moon creators
			ellipse(200, 470, 150, 60);
				
			ellipse(400, 570, 100, 50);
				
			ellipse(530, 490, 80, 40);
			
			ellipse(60, 590, 60, 30);
               
                
               
                
            } 
            
            x = tempX;
            w = tempW;
            h = tempH;
        }
				

				

    }
}