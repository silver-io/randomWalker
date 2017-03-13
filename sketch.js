var w;

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  w = new Walker();
}

function draw() {
	background(51);
	w.update();
	w.display();
}

function Walker() {
	this.pos = createVector(width/2, 0); // so the ellipse starts from the top of the screen
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0.1);

	this.update = function() {
	  this.vel.add(this.acc); //acceleration changes velocity
	  this.pos.add(this.vel); //velocity changes position

	  	}

	this.display = function() {
		fill(255, 204, 0);
		ellipse(this.pos.x, this.pos.y, 48, 48);
	}
}