/*
    Review again of how prototypes work in JS. A prototype is essentially a parent class. The following is the process
    of how instances and prototypes align. Say we have the following instance of a Circle Object and a Shape Object.

    Shape s = new Shape();
    const c = new Circle();

        s --> Shape.prototype --> Object.prototype
     (Shape)

        c --> Circle.prototype --> Object.prototype
     (Circle)
    
    To make Shape the prototype of the Circle object, we use a function from the Object class that allows us to set our 
    child class prototype to all the methods of the parent class prototype. 
*/

// Shape object and move method within it's prototype
function Shape(color) {
    this.color = color;
}

Shape.prototype.move = function() {
    console.log('move');
}

// Circle object and draw method within it's prototype
function Circle(radius, color) {
    Shape.call(this, color); // calling super constructor from parent class or prototype. 
    this.radius = radius;
}

Circle.prototype.draw = function() {
    console.log('draw');
}

// Circle prototype inherits the functions in the shape prototype
Circle.prototype = Object.create(Shape.prototype);
// Setting constructor back to the Circle as above it had the constructor of Shape. 
Circle.prototype.constructor = Circle;

function Sqaure(size) {
    this.size = size;
}

Sqaure.prototype = Object.create(Shape.prototype);
Sqaure.prototype.constructor = Sqaure;

// Improved way: 
extend(Sqaure, Shape);



// Creating instance
const c1 = new Circle(5, 'blue');
console.log(c1);
c1.move();

const s1 = new Sqaure(5)
console.log(s1);
s1.move();


/*
    Note that in the previous example things were getting hectic the more we created objects that were sub classes
    of the shape object. In this example we will define a function to make this process less hectic. 
*/

function extend(Child, Parent) { // Note fields are uppercase bc/ we are expecting constructor function inputs. 
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child
}

