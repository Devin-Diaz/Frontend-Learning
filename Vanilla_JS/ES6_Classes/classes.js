
/* Yo jiht so you remember making constructor functions like this:

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

That's wack, in ES6 WE GOT CLASSES RAHHH
*/

/*
    In ES6, functions defined inside the constructor will not go in the prototype of the object.
    However if we still to regular class design, they will go the prototype. In the example below,
    draw is in the Circle prototype, and move would be in the instance of Circle.
    Recall these classes are still functions. That is the typeof circle.  
*/

class Circle { // ES6 classes are already in strict mode by default. 
    constructor(radius) {
        this.radius = radius;
        this.move = function() {}
    }
    draw() {
        console.log('RAHHAHAHAHH')
    }

    static parse(val) {
        const radius = JSON.parse(val).radius;
        return new Circle(radius);
    }
}

const c1 = Circle.parse('{ "radius: 1}" ')
const c = new Circle(10);

/*
    Hoisting is the location of where you create a function and whether you can call it above it's creation.
    JavaScript is similar to Java with hoisting as we can call functions that are defined below our code,
    however for function expressions, this is not the case, they cannot be called before they are declared. Make sure
    to add the semi-colon for function expressions.

    Same applies to class declaration. They are not hoisted. Class expression also exists but no one uses that jawn. 
*/

/*
    WE ALSO GOT OUR BOI STATIC BACK, SORRY I CHEATED ON YOU JAVA. A review of what static is, static or more specific 
    static functions are utility functions that are not tied to a particular function. Anything with static is a part
    of the class not a specific instance of that class. For example, We have a car class. Each car is different, they
    got their own details, however a static utility function could be, a drive function. All cars drive, that would be
    part of the class rather than to each specific vehicle. 
*/

/*
    Working w private members and methods is a little odd. We use a weak dictionary, a dictionary that if a key doesn't
    have any values, that key gets garbaged collected. We need to get into modules in order to get that cleaner look,
    but for now this is a Student object impl with private fields, methods, accessors, and mutators.
*/


const fields = new WeakMap();

class Student {
    constructor(name, age, year) {
        fields.set(this, { name: name, age: age, year: year });
    }

    getName() {
        return fields.get(this).name;
    }

    getAge() {
        return fields.get(this).age;
    }

    getYear() {
        return fields.get(this).year;
    }

    setName(val) {
        let props = fields.get(this);
        props.name = val;
        fields.set(this, props);
    }

}