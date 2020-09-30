class Bottom{
    constructor(x, y){
        var options = {
            isStatic : true,
            density:0
        }

        this.body = Bodies.rectangle(x, y, 200, 20, options);
        this.width = 200
        this.height = 20
        World.add(world, this.body);
        this.image = loadImage("Dustbin.png");
    }

    display(){
        push()
            //fill("white");
            //rect(this.body.position.x, this.body.position.y, 200, 20);
            imageMode(CENTER);
            image(this.image, this.body.position.x-100, this.body.position.y-150, this.width-60, this.height+150);
        pop()
    }
}