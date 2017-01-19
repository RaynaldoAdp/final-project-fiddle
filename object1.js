//note to self. Dont need to use transformations. just change the x and y coordinates accordingly to prevent headaches;
var Object1 = function(x, y){
	this.x = x || 0;
	this.y = y || 0;
	this.width = 300;
	this.length = 100;
}

Object1.prototype.show = function(){
	push();
	fill(255);
	rect(this.x, this.y, this.width, this.length);
	rect(this.x, this.y, this.width/2, this.length/2);
	pop();
}

Object1.prototype.clicked = function(){
	if(mouseX - this.x > 0 && mouseX - this.x < this.width && mouseY - this.y > 0 && mouseY - this.y < this.length){
		if(mouseX - pmouseX > 2){
			this.x +=10;
		}
		if(mouseY - pmouseY > 2){
			this.y +=10;
		}
		if(mouseX - pmouseX < -2){
			this.x -= 10;
		}
		if(mouseY - pmouseY < -2){
			this.y -= 10;
		}

	}
}

Object1.prototype.cursor = function(){
	if(mouseX - this.x > 0 && mouseX - this.x < this.width && mouseY - this.y > 0 && mouseY - this.y < this.length){
		cursor(MOVE);
	}
	else{
		cursor(ARROW);
	}
}

Object1.prototype.rotate = function(){
	var store = this.width;
	this.width = this.length * -1;
	this.length = store;
}