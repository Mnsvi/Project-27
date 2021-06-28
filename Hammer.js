class Hammer {
    constructor (x,y){

        // applying physics
        var options ={
            density : 2,
            friction : 1.0,
            restitution : 0.5
        };

        // creating body and adding it to world
        this.body = Bodies.rectangle(x, y, 120, 30, options);
        World.add(world,this.body);

        // giving dimensions
        this.width = 100;
        this.height = 30;
}

display()
{
    // giving nickname
    var pos = this.body.position;
    var angle = this.body.angle;

    // mouse movements
    pos.x = mouseX;
    pos.y = mouseY;

    // giving various movements 
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("yellow");
    rect(0,0,this.width,this.height);
    pop();     
}
}