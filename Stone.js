class Stone {
    constructor (x,y,width,height){

        // applying physics
        var options ={
            density : 5,
            restitution : 0.5,
            friction : 2
        }

        // creating body and adding it to world
        this.bodies = Bodies.rectangle(x,y,options)
        World.add(world,this.body);

        // dimensions 
        this.width=width;
        this.height=height;
    }

    display(){
        
        // giving nicknames
        var pos = this.body.position;
        var angle = this.body.angle;

        // giving various movenments to Stone
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}