// 3d textures 
var moon;
var rocket;
var video;
var mySound;
var rotX = 0, rotY = 0;
var x = 150;
var y = 150;


//var stars;






function setup() { 
    
   createCanvas(1200, 880, WEBGL);
    
    moon = loadImage ("images/moonback.jpg");
    rocket = loadImage ("./images/ussr.png");
    video = createVideo("./video/fire.mp4");
//    mySound = loadSound('./mp3/xfiles.mp3');
    
  
    video.loop();
    video.hide();
}


function draw() {
    background('black');

    
    // moom
    texture(moon);
    push();
    translate(300, -200, 100);
    rotateX(rotX);
    rotateY(rotY);
    sphere(100);
    pop();
    //END MOON
    
    
    

    //UFO
    
    texture(video);
    push();
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.02);
    fill(random(255),
      random(255),
      random(255))
    ellipse(250, 250, 100, 100);
    pop();
    
    //ENF UFO
    
   
  //SHEEP 
  if (keyIsDown(LEFT_ARROW))
    x-=5;

  if (keyIsDown(RIGHT_ARROW))
    x+=5;

  if (keyIsDown(DOWN_ARROW))   
    y-=5;

  if (keyIsDown(UP_ARROW))
    y+=5;
  texture(video);  
  push();
  ellipse(x, y, 50, 50);
  pop();

}



function mouseDragged() {
    rotX = mouseX / 100;
    rotY = mouseY / 100;
}









