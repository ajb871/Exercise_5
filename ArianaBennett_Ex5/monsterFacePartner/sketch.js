function setup() {
  createCanvas(800, 800);
  
  frameRate(30);
}

function draw() {
background(76, 219, 229);
// make the head  

  stroke(51, 255, 51);
  strokeWeight(10);
  ellipse(400, 600, width, height);

// make the mouth
  stroke(51, 255, 51);
  strokeWeight(10);
  ellipse(400, 600, width/1.5, 120);
  
 if(keyPressed) {
  
  // to refresh the background in order to get rid of the residual red ellipses in the "fire breath"
  noStroke();
  fill(76, 219, 229);
  rect(0,0, 800, 800);
 
  // to create the opened mouth effect, aka make the black space in the mouth larger 
  stroke(51, 255, 51);
  strokeWeight(5);
  fill(0);
  ellipse(400, 600, width, height); // creates another head while a key is being pressed in order to stop it from disapearing 

  // changes mouth color when shooting fire
  fill(255, 66, 234);
  ellipse(400, 600, width/1.5, 120);

    // spew additional fire
  stroke(240, 150, 50);
  line(random(100), 600, random(400), 650);
  line(random(100), 600, random(400), 600);
  line(random(100), 600, random(400), 700);
  stroke(255, 255, 0);
  line(random(100), 600, random(400), 550);
  line(random(100), 600, random(400), 610);
  stroke(230, 100, 30);
  line(random(100), 600, random(400), 650);
  line(random(100), 600, random(400), 600);
  line(random(100), 600, random(400), 700);
  stroke(255,255,255);
  line(random(100), 600, random(400), 550);
  line(random(100), 600, random(400), 610);
    stroke(240, 150, 50);
  line(random(100), 600, random(400), 650);
  line(random(100), 600, random(400), 600);
  line(random(100), 600, random(400), 700);
  stroke(255, 255, 0);
  line(random(100), 600, random(400), 550);
  line(random(100), 600, random(400), 610);
  stroke(230, 100, 30);
  line(random(100), 600, random(400), 650);
  line(random(100), 600, random(400), 600);
  line(random(100), 600, random(400), 700);
  stroke(255,255,255);
  line(random(100), 600, random(400), 550);
  line(random(100), 600, random(400), 610);
  
  // create fire breath type chain
  noStroke();
  fill(255, 0, 0);
  ellipse(400, 600, random(width/2), random(120));
  ellipse(300, 600, random(width/2), random(120));  
  ellipse(200, 600, random(width/2), random(120));
  ellipse(100, 600, random(width/2), random(120));
  
  
 }

 
// yellow coloring outside of eyes
  stroke(51, 255, 51);
  strokeWeight(15);
  fill(240, 255, 125);
  ellipse(300, 300, width/3, 160);
  ellipse(500, 300, width/3, 160);


// round out the eye in blue  
  fill(0, 0, 255);
  strokeWeight(15);
  ellipse(300, 300, 160, 160);
  ellipse(500, 300, 160, 160);

  
// make shape of the eye  
fill(0);
  ellipse(300, 300, 120, 120);
 
  ellipse(500, 300, 120, 120);

// make pink spherical eye coloration  
  noStroke();
  fill(247, 100, 218);
 ellipse(300, 300, 80, 80);
  
 ellipse(500, 300, 80, 80);

// make black ellipses inside of the pink ellipses
  fill(0);
  ellipse(300, 300, 40, 40);
 
  ellipse(500, 300, 40, 40);
  

}
