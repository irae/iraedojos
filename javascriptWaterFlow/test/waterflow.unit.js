test("WaterFlow(2,10,[10])", function() {
	expect(4);
	
	var w = new WaterFlow(2,10,[10]);
	var ret = w.getInstants();
	
	equals(ret[0][0], 10, "10");
	equals(ret[0][1], 0, "0");
	equals(ret[1][0], 0, "0");
	equals(ret[1][1], 10, "10");
});

test("WaterFlow(2,5,[5])", function() {
	expect(4);
	
	var w = new WaterFlow(2,5,[5]);
	var ret = w.getInstants();
	
	equals(ret[0][0], 5, "10");
	equals(ret[0][1], 0, "0");
	equals(ret[1][0], 0, "0");
	equals(ret[1][1], 5, "10");
});

test("WaterFlow(2,10,[5])", function() {
	expect(6);
	
	var w = new WaterFlow(2,10,[5]);
	var ret = w.getInstants();
	
	equals(ret[0][0], 10, "10");
	equals(ret[0][1], 0, "0");
	equals(ret[1][0], 5, "5");
	equals(ret[1][1], 5, "5");
	equals(ret[2][0], 0, "0");
	equals(ret[2][1], 10, "10");
});
