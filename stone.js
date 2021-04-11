class stone{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.,
            'friction':1.0,
             density:1.2,
             isStatic:false
        }
        this.image=loadImage("stone.png")
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop();
        }
      }
