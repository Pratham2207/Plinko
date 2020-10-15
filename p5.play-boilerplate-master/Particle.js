class Particle{
    constructor(x,y,r){
        var options = {
            restitution : 0.5,
            friction :0,
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill(255);
        ellipseMode(CENTER);
        ellipse(0,0,this.r*2);
        pop();
    }
}