class Plane extends Baseclass{
	constructor(x,y,r)
	{
		super(x,y,r)
		this.image=loadImage("Images/plane.png")
	}

	display(){
		var pos = this.body.position;
		pos.x = mouseX;
		pos.y = mouseY;
		super.display();
	}
}