//note to self. Dont need to use transformations. just change the x and y coordinates accordingly to prevent headaches;
var Object2 = function(x, y){
	this.x = x || 0;
	this.y = y || 0;
	this.width = 300;
	this.length = 100;
	this.rotation = 0;
}

Object2.prototype.show = function(){
	push();
	fill(255);
	rect(this.x, this.y, this.width, this.length);
	rect(this.x, this.y, this.width/2, this.length/2);
	pop();
}

Object2.prototype.condition = function(){
	if(this.rotation === 0){
		return mouseX - this.x > 0 && mouseX - this.x < this.width && mouseY - this.y > 0 && mouseY - this.y < this.length;
	}
	else if(this.rotation === 90){
		return mouseX - this.x < 0 && mouseX - this.x > this.width && mouseY - this.y > 0 && mouseY - this.y < this.length;
	}
	else if(this.rotation === 180){
		return mouseX - this.x < 0 && mouseX - this.x > this.width && mouseY - this.y < 0 && mouseY - this.y > this.length;
	}
	else if(this.rotation === 270){
		return mouseX - this.x > 0 && mouseX - this.x < this.width && mouseY - this.y < 0 && mouseY - this.y > this.length;
	}
}

Object2.prototype.clicked = function(){
		if(this.condition()){
			console.log(mouseX - pmouseX);

			if(mouseX - pmouseX > 5){
				this.x +=10;
			}
			if(mouseY - pmouseY > 5){
				this.y +=10;
			}
			if(mouseX - pmouseX < -5){
				this.x -= 10;
			}
			if(mouseY - pmouseY < -5){
				this.y -= 10;
			}


			if(mouseX - pmouseX > 15){
				this.x +=10;
			}
			if(mouseY - pmouseY > 15){
				this.y +=10;
			}
			if(mouseX - pmouseX < -15){
				this.x -= 10;
			}
			if(mouseY - pmouseY < -15){
				this.y -= 10;
			}


			if(mouseX - pmouseX > 25){
				this.x +=10;
			}
			if(mouseY - pmouseY > 25){
				this.y +=10;
			}
			if(mouseX - pmouseX < -25){
				this.x -= 10;
			}
			if(mouseY - pmouseY < -25){
				this.y -= 10;
			}


			if(mouseX - pmouseX > 35){
				this.x +=10;
			}
			if(mouseY - pmouseY > 35){
				this.y +=10;
			}
			if(mouseX - pmouseX < -35){
				this.x -= 10;
			}
			if(mouseY - pmouseY < -35){
				this.y -= 10;
			}


			if(mouseX - pmouseX > 45){
				this.x +=10;
			}
			if(mouseY - pmouseY > 45){
				this.y +=10;
			}
			if(mouseX - pmouseX < -45){
				this.x -= 10;
			}
			if(mouseY - pmouseY < -45){
				this.y -= 10;
			}

			if(mouseX - pmouseX > 55){
				this.x +=10;
			}
			if(mouseY - pmouseY > 55){
				this.y +=10;
			}
			if(mouseX - pmouseX < -55){
				this.x -= 10;
			}
			if(mouseY - pmouseY < -55){
				this.y -= 10;
			}

			if(mouseX - pmouseX > 60){
				this.x +=10;
			}
			if(mouseY - pmouseY > 60){
				this.y +=10;
			}
			if(mouseX - pmouseX < -60){
				this.x -= 10;
			}
			if(mouseY - pmouseY < -60){
				this.y -= 10;
			}
		}
}

Object2.prototype.cursor = function(){
	if(this.condition()){
		cursor(MOVE);
	}
	else{
		cursor(ARROW);
	}
}

Object2.prototype.rotate = function(){
	var store = this.width;
	this.width = this.length * -1;
	this.length = store;

	this.rotation += 90;
	if(this.rotation === 360){
		this.rotation = 0;
	}
	console.log(this.x, this.y, this.width, this.length);
}