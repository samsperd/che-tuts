console.log('====================================');
console.log(" Sketch is running ");
console.log('====================================');


const s = ( sketch ) => {

//   let x = 100;
//   let y = 100;

//   sketch.setup = () => {
//     sketch.createCanvas(200, 200);
//   };

//   sketch.draw = () => {
//     sketch.background(0);
//     sketch.fill(255);
//     sketch.rect(x,y,50,50);
//   };


  sketch.setup = () => {

    document.body.style.userSelect = 'none'


    let c = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
    c.position(0,0)
    c.style('pointer-events', 'none')
    sketch.clear()

  };

  sketch.draw = () => {

    console.log(" Sketch looping ");


    sketch.stroke(0)
    sketch.strokeWeight(4)
    if (sketch.mouseIsPressed) {
        sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY)
        
    }

  };

};

let myp5 = new p5(s);

// function setup() {
//     console.log(" Sketch started ");
//     let c = createCanvas(windowWidth, windowHeight);
//     c.position(0,0)
//     c.style('pointer-events', 'none')
//     clear()
// }

// function draw() {
//     console.log(" Sketch looping ");


//     stroke(0)
//     strokeWeight(4)
//     if (mouseIsPressed) {
//         line(mouseX, mouseY, pmouseX, pmouseY)
        
//     }
// }