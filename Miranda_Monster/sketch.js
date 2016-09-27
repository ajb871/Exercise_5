  var angle = 0.01
  var angleDirection = 1
  var speed = 5.
  var stop = 0


function setup(){
  createCanvas(windowWidth,windowHeight);
  background(205,164,158);

  
  
}
function draw(){

  background(205,164,158);

//  translate(mouseX - 250,mouseY - 250);

  fill(255,200,200);
  rect(180,75,50,150);
  rect(280,95,50,125);
  
    
  fill(71,31,31);
  ellipse(370,550,300,350);
  
  fill(156,38,50);
  ellipse(260,350,320,260);
  

  triangle(290,720,380,730,340,800);
  triangle(440,720,510,670,490,780);
  
  arc(100,350,80,80,1.5,4.8,CHORD);
  arc(420,325,80,80,-1.9,1.4,CHORD);
  
  
  noFill();
  strokeWeight(3);
  arc(260,410,80,80,0,PI);
  
  fill(197,31,31);
  quad(220,550,190,600,210,650,240,600);
  quad(420,510,390,550,410,610,440,560);
  
  strokeWeight(4);
  line(200,70,220,20);
  line(300,90,340,25);
  
  fill(0,0,0);
  noStroke();
  ellipse(180,310,25,25);
  ellipse(340,340,25,25);


if (mouseIsPressed)
    rotate(angle)
  fill(255,255,255);
  ellipse(200,330,80,80);
  ellipse(320,340,80,80);



  angle += speed * angleDirection
  if ((angle>0.1) || (angle=100)) {
  angleDirection *= -1;
  }
  
}
