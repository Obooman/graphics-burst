class Circle extends Shape{
	constructor(x,y) {
		super(x,y);

		this.progress = 0;
	}

	draw(){
		var {
			x, y, size, opacity, size, fill, selfRotate
		} = this;

		ctx.save();
			ctx.beginPath();
			ctx.translate(x,y);
			ctx.scale(opacity,opacity);
			ctx.lineWidth = 2;

			ctx.arc(0,0,size/2,0,2*Math.PI,false);
			ctx.strokeStyle = `rgba(231, 66, 126, ${opacity})`;
			ctx.fillStyle = `rgba(231, 66, 126, ${opacity})`;

			fill ? ctx.fill() : ctx.stroke();
		ctx.restore();

		this.animate();	
	}
}
