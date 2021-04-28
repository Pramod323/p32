class Block{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        World.add(world, this.body); 
    }

    display(){
        if(this.body.speed<3.3){
            var angle = this.body.angle; 
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,30,40);
            pop(); 
        } else {
           World.remove(world, this.body); 
        }
        
    }
}

