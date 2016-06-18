// var board = {width: 500, height: 500};

class Asteroids {
	constructor() {
		this.size = Math.random() * 20 + 10,
		this.Sx = Math.random() * 600,
		this.Sy = Math.random() * 600,
		this.Vx = Math.random() * 2 - 1,
		this.Vy = Math.random() * 2 - 1
	};

	translate() {
		//r * t = d 
		var time = 1;

		var x = (this.Sx + time * this.Vx) % 600
		var y = (this.Sy + time * this.Vy) % 600

		this.Sx = x < 0 ? x + 600 : x;
		this.Sy = y < 0 ? y + 600 : y;
	}

}

// class Player {
// 	constructor(size, color, Sx, Sy, Vx, Yv) {
// 		size,
// 		color,
// 		Sx,
// 		Sy,
// 		Vx,
// 		Vy
// 	}
// }

