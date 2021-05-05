class Rubber{
    constructor(x,y,r){
        var option = {
        restitution:0.5,
        density:1.2,
        friction: 1.0,
      restitution:0.5
        }
        this.x=x
        this.y=y
        this.r=r

        this.rubberBody=Bodies.circle(x,y,r,option)
        World.add(world,this.rubberBody)



    }
    display(){
    var pos = this.rubberBody.position;
    
    

    push();
    translate(pos.x, pos.y);
    
    strokeWeight(3);
    stroke('black')
    fill('pink')
    rectMode(CENTER)
    ellipse(0, 0, this.r,this.r);
    pop();



    }
}