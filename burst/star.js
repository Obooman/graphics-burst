class Star extends Shape{
	constructor(x,y) {
	  super(x,y);
	}

	draw(){
		var {
			x, y, size, opacity, size, fill, selfRotate
		} = this;

		ctx.save();
			ctx.beginPath();
			ctx.translate(x,y);
			ctx.rotate(d2a(selfRotate));
			ctx.scale(opacity,opacity);
			ctx.moveTo(size*0,-1*size);
			ctx.lineTo(size*-0.29,-0.4*size);
			ctx.lineTo(size*-0.95,-0.31*size);
			ctx.lineTo(size*-0.48,0.15*size);
			ctx.lineTo(size*-0.59,0.81*size);
			ctx.lineTo(size*0,0.5*size);
			ctx.lineTo(size*0.59,0.81*size);
			ctx.lineTo(size*0.48,0.15*size);
			ctx.lineTo(size*0.95,-0.31*size);
			ctx.lineTo(size*0.29,-0.4*size);
			ctx.closePath();

			ctx.fillStyle = ctx.strokeStyle = `rgba(255, 246, 124, ${opacity})`;
			fill ? ctx.fill() : ctx.stroke();

		ctx.restore();

		this.animate();
	}
}