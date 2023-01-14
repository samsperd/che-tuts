function setup() {
    console.log(" Sketch started ");
    noCanvas()

    let r = floor(random(5)) + 1

    let img = createImg('kittens/kitten' + r + '.jpg')

    img.size(windowWidth, windowHeight)

    img.position(0,0)
}
