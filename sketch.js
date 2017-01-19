var gridArray = [];
var object1 = new Object1(0,0);

var grid = new Grid();
gridArray.push(grid);

function setup(){
	createCanvas(501, 501);
	background(100);
	frameRate(60);
}

function draw(){
	for(var i = 0; i< gridArray.length; i++){
		gridArray[i].show();
	}

	object1.show();

	ellipse(0,0,50);
}

function mouseClicked() {
	object1.clicked();
}



