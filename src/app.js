var asteroids = [];

var initilize = function() {
	var nAsteroids = 10;

	for (var i = 0; i < nAsteroids; i++) {
		asteroids.push(new Asteroids())
	};

	return asteroids;
};

var render = function() {
	d3.selectAll(".asteroid")
	    .data(asteroids)
	    .style("top", function(d) { return d.Sy + "px"; })
	    .style("left", function(d) { return d.Sx + "px"; })
	    .style("width", function(d) { return d.size + "px"; })
	    .style("height", function(d) { return d.size + "px"; })
	    .style("border-radius", function(d) { return Math.floor(d.size/2) + "px"; });
};

var update = function() {
	asteroids.forEach(function(asteroid) {
		asteroid.translate();
	})
}


$( document ).ready(function() {
	//task 1 >> create an html list using an array of numbers with d3
	initilize();

	setInterval(function() {
		render();
		update();
	}, 1000/60);

})