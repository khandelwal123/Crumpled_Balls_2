class Paper{
    constructor(x, y){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.image = loadImage("Paper.png");
        this.body = Bodies.circle(x, y, 70, options);
        this.radius = 70
        World.add(world, this.body);
        
    }

    display(){
        push()
            //fill("red")
            //circle(this.body.position.x, this.body.position.y, 15)
            imageMode(CENTER);
            image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
        pop()
    }
}