

function WaterFlow(boxes, initialLiters, flow) {
	this.initialLiters = initialLiters;
	this.boxes = boxes;
	this.flow = flow;
	return this;
};

WaterFlow.prototype.getInstants = function getInstants(){
	var ret = [];
	// var steps = this.initialLiters / this.flow;
	ret.push([this.initialLiters,0]);
	if(this.initialLiters/this.flow > 1) {
		ret.push([this.initialLiters - this.flow,0 + this.flow]);
	}
	ret.push([0,this.initialLiters]);
	return ret;
};