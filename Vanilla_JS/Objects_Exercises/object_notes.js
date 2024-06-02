/*
    Basics:

    OOP in JavaScript is different compared to Java and Python and that is due to not using classes (I lied). In JS objects
    are key value pairs within 1 big variable. They are essentially a dictionary from python. 

    Every object has a constructor, a constructor is the function that wa sused to create that object. 
    
    However each key pair, can also nest there own sub key-value pairs. Bascially a field within a field.

    We can have functions within an object, these are our methods. In JS it's important to distinguish functions
    from methods. Any functions contained within an object are methods and any function out in the open is a function.

    It's good practice to always use const when creating an object to prevent accidental reassignment in code, however
    despite an object being a const, we can stil access and mutate attributes of that object. 
*/

// Example of manually creating a circle object
// Note for location attribute, if we just do, this.location, it will only display 'object' we must directly specify which inner field. 

const circle = {
    radius: 1, // field
    location: { // nested object
        x: 1,
        y: 1
    },
    isVisible: true, // field
    displayAttributes: function() { // method
        return this.radius + ", " + this.location.x + ", " + this.location.y + ", " + this.isVisible;
    }
}

// Operations
circle.color = 'blue'; // adding attribute to circle object
delete circle.color; // deleting attribute from object

console.log(circle.displayAttributes())

/*
    However, in the example above we hard coded the object, the following is a more optimal appraoch known
    as the factory function. This is a lot more optimal and a unique way cus I main Java so it's like wth rn. 
*/

function createCircle(radius) {
    return {
        radius, 
        displayAttributes() {
            return 'The radius of this circle is: ' + this.radius;
        }
    }
}

const c1 = createCircle(5);
const c2 = createCircle(10);
console.log(c1.displayAttributes() + " " + c2.displayAttributes())


/*
    I'm pretty cool though so I'm use to the Java way of creating objects. The following is an example:
*/

function Circle(radius) {
    this.radius = radius;
    this.displayAttributes = function() {
        return "radius of cicle: " + this.radius;
    }
}

const newCircle = new Circle(10);
console.log(newCircle.displayAttributes());

// There are two main ways to create objects in JS, there is classes, however let's stick to basics for now.



