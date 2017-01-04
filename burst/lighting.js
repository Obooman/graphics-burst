class Lighting extends Shape{
	constructor(x,y){
		super(x,y);
	}

	draw(){
		var {
			x, y, size, opacity, size, fill, selfRotate
		} = this;

		ctx.save();
			ctx.translate(x,y);
			ctx.rotate(d2a(selfRotate));
			ctx.scale(opacity,opacity);
			ctx.beginPath();
			ctx.moveTo(2,-11);
			ctx.lineTo(-8,-0.59);
			ctx.lineTo(-1.86,2.7);
			ctx.lineTo(-4.02,11.64);
			ctx.lineTo(4.39,2);
			ctx.lineTo(-0.91,-2);
			ctx.closePath();

			ctx.fillStyle = ctx.strokeStyle = `rgba(248, 232, 28,${opacity})`;
			fill ? ctx.fill() : ctx.stroke();
		ctx.restore();

		this.animate();
	}
}