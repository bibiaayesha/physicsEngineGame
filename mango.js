class coconut{
    constructor(x, y, diametre,height) {
        var options = {
            isStatic:true,
            'restitution':0.5,
            'friction':1.0,
        }
        this.body = Bodies.circle(x, y, diametre , options);
        this.diametre=diametre;
        this.image = loadImage("coconut.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.diametre,this.height);
        pop();
      }
}