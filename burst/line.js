class Line extends Shape{
	constructor(x,y) {
	  super(x,y);

	  this.length = rnd(20,100);
	}

	draw(){
		var {
			x,y
		} = this;

		ctx.save();
		ctx.beginPath();
			ctx.translate(x,y);
			
			ctx.scale(this.opacity,this.opacity);
			ctx.moveTo(0,0);
			ctx.lineTo(
				this.length*Math.sin(d2a(this.rotate))*(this.opacity)*0.4,
				this.length*Math.cos(d2a(this.rotate))*(this.opacity)*0.4
			)
			
			ctx.strokeStyle = `rgba(73, 144, 226,${this.opacity})`;
			ctx.stroke();

		ctx.restore();

	  	this.animate();
	}

}