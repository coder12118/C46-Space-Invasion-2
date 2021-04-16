class Asteroid extends Baseclass{
	constructor(x,y,r)
	{
		super(x,y,r)
		this.image=loadImage("Images/asteroid.png")
		this.image1 = loadImage("Images/burning_asteroid.png")
		this.visibility = 255;
		this.r = r;
	}

	display()
	{
		if(this.body.speed < 3){
			super.display();
		}
		else{
			Matter.Body.setStatic(this.body, false);
			World.remove(world, this.body);
			push();
			this.visibility = this.visibility-5;
			tint(255, this.visibility);
			image(this.image1, this.body.position.x, this.body.position.y, this.r*3, this.r*3);
			pop();
		}

 }
}