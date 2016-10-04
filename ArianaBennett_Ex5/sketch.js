function setup() {
  createCanvas(1000, 600);

  //colors are established globally
  bluish = color(70, 30, 255);
  white = color(255, 20, 50);
  orange = color(170, 20, 100);
  greenish = color(100, 200, 60);
  purple = color(120, 10, 160);
  neongreen = color(51, 255, 51);
}

function draw() {
  //each monster is called with a different color
  background(12, 120, 120);
  var x = 265;
  var y = 300;
  scale(.5, .5); //each additional scale makes the next monster smaller or larger
  monster(bluish, white, greenish);
  scale(.75, .75);
  translate(800, 450); //translate funtion pushes the next monster over and up
  monster(orange, greenish, bluish);
  translate(900,0);
  monster2(neongreen);
  scale(.5, .5);
  translate(0, -700);
  monster2(bluish);
}

function monster(color1, color2, color3, color4) {

  strokeWeight(8);

  //neck
  stroke(40, 70, 20);
  fill(color2);
  rect(400, 450, 100, 700);
  strokeWeight(30);
  stroke(230, 200, 30);
  line(400, 700, 500, 700);
  line(400, 800, 500, 800);
  line(400, 900, 500, 900);

  //head
  strokeWeight(8);
  stroke(100, 10, 6);
  fill(170, 20, 10);
  triangle(150, 300, 750, 300, 450, 650);

  stroke(130, 70, 10);
  fill(color1);
  triangle(150, 300, 750, 300, 450, 600);

  //nose
  stroke(0);
  line(420, 480, 435, 520);
  line(475, 480, 460, 540);

  //eyes
  stroke(0);
  fill(255);
  ellipse(200, 300, 220, 220);
  ellipse(700, 300, 220, 220);

  //eyebrows
  strokeWeight(40);
  line(300, 240, 130, 150);
  line(600, 240, 770, 150);

  //teeth
  strokeWeight(8);
  fill(255);
  //first
  triangle(425, 575, 360, 510, 340, 620);
  triangle(475, 575, 540, 510, 560, 620);
  //second
  triangle(350, 500, 285, 435, 280, 600);
  triangle(550, 500, 615, 435, 620, 600);

  //antennaes 
  stroke(100, 90, 10);
  strokeWeight(8);
  fill(230, 200, 30);
  rect(540, 90, 30, 210);
  rect(360, 90, 30, 210);

  stroke(100, 10, 70);
  fill(232, 32, 152);
  ellipse(555, 90, 60, 30);
  ellipse(375, 90, 60, 30);

  //monsters have twitching eyeballs based on random numbers
  monsterPupils(random(380, 450));
}

function monsterPupils(lat) {
  //pupils
  stroke(70, 30, 255);
  fill(0);
  ellipse(lat - 185, 300, 70, 70);
  fill(70, 30, 255);
  stroke(0);
  ellipse(lat + 330, 300, 30, 30);

  //eye light
  noStroke();
  fill(255);
  ellipse(lat - 210, 280, 20, 20);
  ellipse(lat + 320, 290, 20, 20);

}

function monster2(color1) {
 // make the head  

  stroke(color1);
  strokeWeight(10);
  fill(0);
  ellipse(400, 600, 900, 900);

// make the mouth
  stroke(color1);
  strokeWeight(10);
  ellipse(400, 600, width/1.5, 120);
  
 if(keyIsPressed) {
 
  // to create the opened mouth effect, aka make the black space in the mouth larger 
  stroke(color1);
  strokeWeight(5);
  fill(0);

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
  stroke(color1);
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