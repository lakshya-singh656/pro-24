class Rock {
    constructor(x, y) {
      var options = {
        'density':4,
        'friction': 1.0,
        'restitution':0.5
      };
      this.rockBody = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 80;
      this.height = 100;
      World.add(world, this.rockBody);
    };
    display(){
      var pos = this.rockBody.position;
      
  
      push();
      translate(pos.x, pos.y);
      
      strokeWeight(3);
      stroke('black')
      fill('blue')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  