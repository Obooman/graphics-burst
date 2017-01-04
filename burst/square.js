class Square extends Shape{
	constructor(x,y) {
	  super(x,y);
	}

	draw(){
		var {
			x, y, size, opacity, size, fill, selfRotate
		} = this;

		ctx.save();
			ctx.translate(x,y)
			ctx.rotate(d2a(selfRotate));
			ctx.scale(opacity,opacity);
			
			ctx.strokeStyle = `rgba(38, 233, 146,${opacity})`;
			ctx.fillStyle = `rgba(38, 233, 146,${opacity})`;


			fill ? 
			ctx.strokeRect(-size/2,-size/2,size,size) :
			ctx.fillRect(-size/2,-size/2,size,size);

		ctx.restore();
	 	this.animate();
	}

	
}