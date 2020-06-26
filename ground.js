class Gquare{
    constructor(x,y){
     var option={
        'restitution':1.0,
        'isStatic':true
        
    }
    this.body=Bodies.rectangle(x,y,1200,70,option)
    this.height=70
    this.width=1200
    World.add(world,this.body)
    
    
    
    
    }
     
    display(){
     var pos=this.body.position
     
    push()
    translate(pos.x,pos.y)
    rectMode(CENTER)
    fill("red")
    rect(0,0,this.width,this.height)
    pop();
    
    
    }
    
    
    
    
    }
    
    







































//class Ground{
//constructor(x,y,radius){
//var options={
//'isStatic':true,




//}


//this.body=Bodies.circle(x,y,width)
//this.x=x
//this.y=y
//this.width=width
//World.add(world,this.body)
//}

//display(){
//var pos=this.body.position
//push()
//translate(pos.x,pos.y)
//ellipseMode(CENTER)
//fill("red")
//ellipse(pos.x,pos.y,this.body.width)
//console.log(pos.x)
//pop()








//}




//}