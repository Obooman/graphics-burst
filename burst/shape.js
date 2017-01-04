class Shape{
	constructor(x,y){
		this.x = x;
		this.y = y;
		this.rotate = rnd(0,360);
		this.selfRotate = 0;
		this.speed = rnd(10,50)*0.1;
		this.size = rnd(50,100)*0.1;
		this.fill = rndSign() > 0;

		this.opacity = 1;
	}

	animate(){
		this.x += this.speed * Math.sin(d2a(this.rotate));
		this.y += this.speed * Math.cos(d2a(this.rotate));

		this.selfRotate += this.speed;

		this.opacity -= 0.01
	}
}