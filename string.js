class String {
    constructor(pointA,bodyB){
        var options={
            pointA :pointA,
            bodyB:bodyB,
            stiffness : 1.2,
            length:250
        }

        this.pointA = pointA;
        this.string = Constraint.create(options);
        World.add(world,this.string);

    }

    display(){
        var pointA = this.pointA
        var pointB = this.string.bodyB.position
        push()
        stroke(48,22,8)
        strokeWeight(3)
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }

    
}