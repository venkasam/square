class Sling{
    constructor(bodyA,pointB)
    
    {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:.02,
            lenght:30
    
    
    
        }
    this.pointB=pointB
    this.sling=Matter.Constraint.create(options)
    World.add(world,this.sling)
    
    
    
    
    
    }
    fly(){
    this.sling.bodyA=null
    
    }
    display(){
        if(this.sling.bodyA){
    var pointA=this.sling.bodyA.position
    var pointB=this.pointB
    
    strokeWeight(4)
    line (pointA.x,pointA.y,pointB.x,pointB.y)
    
        }
    
    
    }
    
    
    
    
    
    }