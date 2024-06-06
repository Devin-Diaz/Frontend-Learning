/*
    Same example from the previous notes but less hectic. We now focus on method overriding
*/

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent);
    Child.prototype.constructor = Child;
}

function Shape() {}
Shape.prototype.move = function() { console.log('move'); }

function Circle() {}

extend(Circle, Shape)

// move method got override
Circle.prototype.move = function() { console.log('move de circle'); }

function Square() {}
extend(Square, Shape);

Square.prototype.move = function() { console.log('duplicate square') }

// Polymorphism in action. A shape has many different forms. 
const shapes = [
    new Circle(),
    new Square()
];

for(let shape of shapes)
    shape.move() // will display the override method depending on the type of shape