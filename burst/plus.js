class Plus extends Shape{
	constructor(x,y) {
		super(x,y);

		this.progress = 0;
	}

	draw(){
		var {
			x,y,size,progress
		} = this;

		ctx.save();
			ctx.beginPath();
			ctx.lineWidth = 2;

			ctx.translate(x,y);
			
			ctx.scale(this.opacity,this.opacity);
			ctx.rotate(d2a(this.selfRotate));

			ctx.moveTo(-size/2,0);
			ctx.lineTo(size/2,0);
			ctx.moveTo(0,-size/2);
			ctx.lineTo(0,size/2);

			ctx.strokeStyle = `rgba(221, 62, 62,${this.opacity})`;
			ctx.stroke();
		ctx.restore();
		this.animate();	
	}
}