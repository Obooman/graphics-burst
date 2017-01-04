class Triangle extends Shape{
	constructor(x,y){
		super(x,y);
	}

	draw(){
		var {
			x, y, size, opacity, size, fill, selfRotate
		} = this;

		ctx.save();
		ctx.beginPath();
			ctx.translate(x,y);
			ctx.scale(opacity,opacity);
			ctx.rotate(d2a(selfRotate));
			ctx.moveTo(-0.06*size,-0.98*size);
			ctx.lineTo(-1.03*size,0.98*size);
			ctx.lineTo(1.03*size,0.98*size);
			ctx.closePath();
			ctx.fillStyle =`rgba(73, 91, 226,${opacity})`;
			ctx.strokeStyle =`rgba(73, 91, 226,${opacity})`;

			fill ? ctx.fill() : ctx.stroke();
		ctx.restore();
		this.animate();
	}
}