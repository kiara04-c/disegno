function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
background("lightblue");
fill("green");
noStroke();
rect(0, 600, windowWidth, 200);

//persona
stroke("black");
line(135,195,135,500);
noStroke();
fill(random(0,255),random(0,255),random(0,255));
ellipse(135,160,100,115);
rect(130,195,10,30);

stroke("black");
line(400,235,400,500);
noStroke();
fill(random(0,255),random(0,255),random(0,255));
ellipse(400,200,100,115);
rect(395,235,10,30);

stroke("black");
line(670,195,670,500);
noStroke();
fill(random(0,255),random(0,255),random(0,255));
ellipse(670,160,100,115);
rect(665,195,10,30);

}

