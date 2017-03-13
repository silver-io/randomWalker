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
	this.pos = createVector(width/2, height/2); // the ellipse starts from the centre of the screen
	this.vel = createVector(0, 0);


	this.update = function() {
	  this.acc = createVector(random(-1, 1), random(-1, 1)); // we make a new acc vector every single frame
	  this.acc.mult(5); //vector is accelerated dramatically as the vector created is immediatelly scaled by 5

	  this.vel.add(this.acc); //acceleration changes velocity
	  this.pos.add(this.vel); //velocity changes position

	  	}

	this.display = function() {
		fill(255, 204, 0);
		ellipse(this.pos.x, this.pos.y, 48, 48);
	}
}
