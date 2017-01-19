var Grid = function(x, y){
	this.x = x || 0;
	this.y = y || 0;
}

Grid.prototype.show = function(){
    for(var i = 0; i < 501; i += 10){
        for(var j = 0; j < 501; j+= 10){
            rect(i, j, 10, 10);
        }
    }
}