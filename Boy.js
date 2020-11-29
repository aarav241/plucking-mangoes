class Boy{
    constructor(x, y, width, height, angle) {
    
    
        this.body = Bodies.rectangle(x, y, width, height, {isStatic:true});
        this.width = width;
        this.height = height;
        this.image = loadImage("boy.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0,0, 300, 400);
        pop();
      }
}