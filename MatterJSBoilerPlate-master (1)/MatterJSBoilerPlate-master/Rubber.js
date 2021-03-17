class Rubber{
    constructor(x, y,radius) {
        var options = {
            'restitution':0.3,
            'friction':5.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("blue");
        ellipseMode(CENTER);
        circle(0, 0, this.radius);
        pop();
      }
}