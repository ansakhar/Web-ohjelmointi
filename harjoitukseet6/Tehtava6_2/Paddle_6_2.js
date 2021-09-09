// Paddle_6_2
function Paddle(canvas,ctx) {
	this.canvas = canvas;
	this.ctx = ctx;
	this.w = 100;
	this.h = 20;
	this.x = canvas.width/2-this.w/2;
	this.y = canvas.height-50;
	this.color = "#FF00FF";
	this.canvasWidth = canvas.width;
	this.canvasHeight = canvas.height;
	
	// draw paddle
	this.draw = function() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x,this.y,this.w,this.h);
	}
	
	// move paddle
	this.move = function(mouseXpos, mouseYpos) {
		this.x = mouseXpos - this.w/2;
		this.y = mouseYpos - this.h/2;
		if (mouseXpos < this.w/2) this.x = 0;
        if (mouseXpos > this.canvasWidth - this.w/2) this.x = this.canvasWidth-this.w;
		if (mouseYpos < 314) this.y = 314;
        if (mouseYpos > this.canvasHeight- 50 - this.h/2) this.y = this.canvasHeight - 50 -this.h;
	}
	
}