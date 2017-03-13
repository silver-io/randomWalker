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
	  var mouse = createVector(mouseX, mouseY);
	  this.acc = p5.Vector.sub(mouse, this.pos) //the mouse position is stored in acc
	  this.acc.mult(0.01);


	  this.vel.add(this.acc); //acceleration changes velocity
	  this.pos.add(this.vel); //velocity changes position

	  	}

	this.display = function() {
		fill(255, 204, 0);
		ellipse(this.pos.x, this.pos.y, 48, 48);
	}
}
