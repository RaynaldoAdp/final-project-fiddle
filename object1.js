var value = 100;

var Object1 = function(x, y){
	this.x = x || 0;
	this.y = y || 0;
	this.translate = 0;
}

Object1.prototype.show = function(){
	push();
	fill(value);
	translate(this.translate, this.translate);
	rect(this.x,this.y, 50, 50);
	pop();
}

Object1.prototype.clicked = function(){
	this.translate += 10;
}