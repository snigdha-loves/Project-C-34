class Garlic{
    constructor(x,y,w,h){
        var options ={
            isStatic: true
        };

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        this.image = loadImage ('./Images/garlic.jpg')

        World.add (world, this.body)
    }

    show() {
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        fill("#8d6e63");
        image(this.image,0,0,this.w,this.h);
        pop();
      }
}