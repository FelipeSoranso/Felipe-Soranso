function setup() {
    createCanvas(600, 600);
    background("#C0C0C0");
  }
  
  function draw() {
    
    stroke ("purple")
    fill ("#3F51B5");
    
    // console.log(mouseIsPressed);
    
    if(mouseIsPressed) {
      rect(mouseX,mouseY,20,20);
    }
    
  }
  