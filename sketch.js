var gridArray = [];
var objects = [];

var mode1 = false;
var mode2 = false;

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
  		objects[1].clicked();
}

$(document).ready(function(){
	$('form').submit(function(event){
		event.preventDefault();
		generate();
	})

	$('#rotate').click(function(){
		objects[0].rotate();
	})

	$('#rotate2').click(function(){
		objects[1].rotate();
	})

	$('#generate2').click(function(){
		objects.push(new Object2(300,300));
		mode2= true;
		mode1= false;
	})
})

function generate(){
	$('#generate1').click(function(){
		var x = $('#width').val();
		var y = $('#width').val();
		console.log(x,y);
		mode1= true;
		objects.push(new Object1(0,0,x,y));
	})
}





