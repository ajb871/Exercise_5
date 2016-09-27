function setup() {
  createCanvas(2000, 2000);

  //colors are established globally
  bluish = color(70, 30, 255);
  white = color(255, 20, 50);
  orange = color(170, 20, 100);
  greenish = color(100, 200, 60);
  purple = color(120, 10, 160);
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
  translate(600, -450);
  monster(white, orange, bluish);

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
  //placement of eyeballs depends on random number generated
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