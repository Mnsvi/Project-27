class Rubber {
    constructor(x,y,r){

        // applying physics
        var options = {
            restitution : 0.3,
            friction : 5, 
            density :1
        }

        // giving dimensions 
        this.x=x;
        this.y=y;
        this.r=r;

        // creating body and adding it to world
        this.body = Bodies.circle (this.x, this.y, (this.r-20)/2, options)
        World.add(world, this.body);
        }
        
    display()
    {
        // giving nickname
        var rubberpos = this.body.position;
        push()
        translate (rubberpos.x, rubberpos.y);
        rectMode(CENTER)
        fill("blue");
        ellipse (0, 0, this.r, this.r)
        pop()
}
}