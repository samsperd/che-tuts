function setup() {
    console.log(" Sketch started ");
    document.body.style.userSelect = 'none'
    
    let c = createCanvas(windowWidth, windowHeight);
    c.background(0)
    c.position(0,0)
    c.style('pointer-events', 'none')
    clear()
}

function draw() {
    console.log(" Sketch looping ");


    stroke(0)
    strokeWeight(4)
    if (mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY)
        
    }
}