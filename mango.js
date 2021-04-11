class mango{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.,
             isStatic:true
        }
        this.image = loadImage("mango.png")
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius)
        pop();
        }
  
      }
}