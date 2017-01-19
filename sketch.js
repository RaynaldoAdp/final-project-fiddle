var gridArray = [];
var object1 = new Object1(100,100);

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
	object1.cursor();

}

function mouseClicked() {
	if(pmouseX - mouseX > 0){
		console.log(pmouseX-mouseX)
		object1.clicked();
	}
}

function mouseDragged() {
	if(pmouseX - mouseX > 0){
  		object1.clicked();
  	}
}

$(document).ready(function(){
	$('button').click(function(){
		object1.rotate();
	})
})





