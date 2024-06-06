/*
    For inheritance we want to be able to use the same method to reduce code
    but with different implementations depending on the object we are using it 
    on. We define these methods in a more general class known as either the,
    Base, Super, or Parent class. The more specific class is known as the 
    sub-class, or child class. 
    
    Although classes do now exist in JS, the previous way of using inheritance was via prototypes. 
    In simple terms, a prototype is the parent class. If we have Shape and Circle objects. And Circle
    inherits methods from Shape object. Now the Shape object is referred to as the prototype of the Cirlce
    Object. 

    A prototype is a regular object in memory. Every object has a prototype except the root object. 
*/

// x and y inherit default methods from root object such as toString. Thus there are child objects. 
let x = {}
let y = {}
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y))


/*
    Multilevel inheritance is when we inherit methods from more than one root object. For example
    let's say we make an instance of an array. That array will inherit all methods from the root
    array object. And the root array object will inherit all the methods from the root object.
    Everything is structured well so were not duplicating code while keeping methods abstract. 
*/

/*
    Original Circle Object

    function Circle(radius) {
        this.radius = radius
        this.draw = function() {
            console.log('draw)
        }
    }

    Every time we make an instance of this object, we will be creating a new draw function. You
    may be thinking, no kidding sherlock but in bigger applications, this would take up a lot of
    memory. So instead we are going to make the draw function in the prototype of the circle instance.
    We we run the circle instance, it won't find the draw function there, so it will look in it's 
    prototype, thus saving memory as we only have the draw function created once within the prototype.

           (Prototype of instance)
    c1, c2, c3 --> Circle --> Object
                           (Prototype of all)
*/

function Circle(radius) {
    // Instance members
    this.radius = radius;

    // we reference protoype methods for instance methods and vice versa for protoype methods. 
    this.move = function() {
        this.draw()
        console.log('move')
    }
}

// Prototype members
Circle.prototype.draw = function() {
    console.log('draw');
}

// Overriding toString method from Object with Circle prototype
Circle.prototype.toString() = function() {
    return 'Circle with radius ' + this.radius;
}

// NOTE: DON'T MODIFY BUILT IN JS FUNCTIONS YOU DON'T OWN. 