var num1=num2
var b1,b2
function setup(){
  createCanvas(400,400)
  num1=createInput()
  num1.position(5,60)
  num2=createInput()
  num2.position(200,60)
  b1=createButton("add")
  b1.position(10,200)
  b1.mousePressed(add)
}
function draw(){
  background("blue")
  text("number 1",70,50)
  text("number 2",270,50)
  text(add,200,300)
}
