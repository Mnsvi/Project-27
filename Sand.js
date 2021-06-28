class Sand
{
    constructor(x,y,diameter)
    {
        var options={
            restitution : 1.3,
            friction : 5,
            density : 1
        }

        // creating bodies and adding it to world
        this.body=Bodies.circle(x,y,diameter,options);
        World.add(world,this.body);
        
        // giving dimensions 
        this.diameter=diameter;
      }

    display()
    {
        // giving nicknames
        var pos=this.body.position;
        var angle=this.body.angle;
        
        // giving various movements
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("orange");
        circle(0,0,this.diameter);
        pop();     
    }
}