class Iron
{
    constructor(x, y, width, height)
    {
        var options={
            restitution : 0.8,
            friction :1.0,
            density : 3
        }

        // creating bodies and adding it to world
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        
        //  giving dimensions 
        this.width=width;
        this.height=height;
    }

    display()
    {

        // givig nicknames
        var pos=this.body.position;
        var angle=this.body.angle;

        // giving various movements 
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("gray");
        rect(0,0,this.width,this.height);
        pop();     
    }
}