let bug1;
let bug2;
let bug3;

function setup() {
  createCanvas(400, 400);

  bug1 = new Bug(color(random(255), random(255), random(255)));
  bug2 = new Bug(color(random(255), random(255), random(255)));
  bug3 = new Bug(color(random(255), random(255), random(255)));
}

function draw() {

  bug1.display();
  bug2.display();
  bug3.display();

  if(bug1.bugXposition > width || bug1.bugXposition < 0 || bug1.bugYposition > height || bug1.bugYposition < 0) {
    bug1.bugColor = color(0);
  }

  if(bug2.bugXposition > width || bug2.bugXposition < 0 || bug2.bugYposition > height || bug2.bugYposition < 0) {
    bug2.bugColor = color(0);
  }

  if(bug3.bugXposition > width || bug3.bugXposition < 0 || bug3.bugYposition > height || bug3.bugYposition < 0) {
    bug3.bugColor = color(0);
  }

}

function Bug(tempBugColor) {
  this.bugColor = tempBugColor;
  this.bugXposition = width/2;
  this.bugYposition = height/2;
  this.bugRadius = 50;

  this.display = function() {
    fill(this.bugColor);
    this.bugXposition = this.bugXposition + random(-15, 15);
    this.bugYposition = this.bugYposition + random(-15, 15);
    circle(this.bugXposition, this.bugYposition, this.bugRadius);
  }

}
