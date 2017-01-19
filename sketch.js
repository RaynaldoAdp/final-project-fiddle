var gridArray = [];
var objects = [];

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
		gridArray[i].show2();
	}

	for(var i =0; i< objects.length; i++){
		objects[i].show();
		objects[i].cursor();
	}


}

function mouseDragged() {
  		objects[0].clicked();
}

$(document).ready(function(){
	$('#rotate').click(function(){
		objects[0].rotate();
	})

	$('#generate1').click(function(){
		objects.push(new Object1(100,100));
	})
})





