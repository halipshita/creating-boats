class Boat {
    constructor (x,y,width,height,boatPos) {
       var options = {
        restitution : 0.8,
        friction : 1,
        density : 1
        }
this.body = Bodies.rectangle (x,y,width,height,options)

this.width = width
this.height = height
this.boatPosition = boatPos
this.image = loadImage ("./assets/boat.png")
World.add (world,this.image) 
    }

    display () {
       var pos = this.body.position
       push ()
        translate (pos.x,pos.y)
        imageMode (CENTER)
        image (this.image,pos.x,pos.y,this.width,this.height)
        pop ()
    }
}