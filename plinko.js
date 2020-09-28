class Plinko{
    constructor(x,y){
        var op={
            isStatic:true,
            density:1.2,
            friction:0.2,
            restitution:0.4,
        }
        this.body=Bodies.circle(x,y,10,op);
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}