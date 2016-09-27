function setup() {
  createCanvas(900, 900);
  background(120, 120, 120);
}

function draw() {
  monsterNeck();
  monsterHead();
}

function monsterHead(){
//head
stroke(100, 10, 6);
strokeWeight(8);
fill(170, 20, 10);
triangle(150, 300, 750, 300, 450, 650);

stroke(130, 70, 10);
fill(255, 143, 28);
triangle(150, 300, 750, 300, 450, 600);

//eyes
stroke(0);
fill(255);
ellipse(200, 300, 220, 220);
ellipse(700, 300, 220, 220);

//pupils
stroke(70, 30, 255);
fill(0);
ellipse(265, 300, 70, 70);
fill(70, 30, 255);
stroke(0);
ellipse(780, 300, 30, 30);

//eye light
noStroke();
fill(255);
ellipse(240, 280, 20, 20);
ellipse(770, 290, 20, 20);

//nose
stroke(0);
line(420, 480, 435, 520);
line(475, 480, 460, 540);

//teeth
fill(255);
//first
triangle(425, 575, 360, 510, 340, 620); 
triangle(475, 575, 540, 510, 560, 620);
//second
triangle(350, 500, 285, 435, 280, 600);
triangle(550, 500, 615, 435, 620, 600);

//eyebrows
strokeWeight(40);
line(300, 240, 130, 150);
line(600, 240, 770, 150);

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
}
  
function monsterNeck(){
strokeWeight(8);

//neck
stroke(40, 70, 20);
fill(100, 200, 60);
rect(400, 450, 100, 700);
strokeWeight(30);
stroke(230, 200, 30);
line(400, 700, 500, 700);
line(400, 800, 500, 800);
line(400, 900, 500, 900);

}