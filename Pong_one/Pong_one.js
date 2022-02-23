var x = Math.floor(Math.random() * 300) + 50;
var y = 50;
var vx = (2, 7)
var vy = (-7, -2);
var score = 0;
var fail = 0;

function move() {
  x += vx;
  y += vy;
}

function bounce() {
  if (x < 10 || x > 400 - 10) {
    vx *= -1;
  }
  if (y < 10) {
    vy *= -1;
  }
  if (y > 400 - 10) {
    fail++;
    y = 50;
  }
  if(fail == 3) {
    noLoop();
    fill(115, 168, 50);
    textSize(40);
    text("GAME OVER!", width/2 - 110, height/2);
  }
}

function paddle() {
  if ((x > mouseX && x < mouseX +90) && (y + 10 >= 375)) {
    vx *= -1;
    vy *= -1;
    score++;
  }
}

function display() {
  fill(255);
  ellipse(x, y, 20, 20);
}

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(0);
  
  // paddle
  fill(0, 255, 0);
  rect(mouseX, 375, 90, 15);
  
  // functions
  move();
  display();
  bounce();
  paddle();
  
  // Score
  fill(255, 0, 0);
  textSize(30);
  text("Score: " +score, 10, 25);
  
  fill(0, 0, 255);
  textSize(30);
  text("Fails: "+fail, 300, 25);
  
}
