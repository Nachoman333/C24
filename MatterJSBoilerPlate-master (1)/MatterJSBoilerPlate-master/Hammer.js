class Hammer{
    constructor(x, y) {
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':2.0
        }
        this.body = Bodies.rectangle(x, y, 100, 50, options);
        this.width = 100;
        this.height = 50;
        World.add(world, this.body);
      }
      display(){
        push();
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        translate(this.body.position.x, this.body.position.y);
        fill("yellow");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
}