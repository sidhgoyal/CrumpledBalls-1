class Paper{
    constructor(x, y){
    var options = {
        isStatic:false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.3
    }    
    this.body = Bodies.circle(x, y, 20, options)
    
    World.add(world, this.body)

    }
    display(){
        var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("lightgreen");
      ellipse(pos.x,pos.y, 20,20);
      }
}