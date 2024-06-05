/*
    OOP - Object oriented programming is a style of program that is centered around
    objects rather than functions. In OOP, related variables and functions get grouped
    into a unit that being an object. This object is essentially data you would find
    in a miniworld. 

    The four pillars of OOP are the following,
    Polymorphism, Inheritance, Encapsulation, and Abstraction: PIE A
*/

//--------------------------------------------------------------------------------------------
/*
    The following is an example of encapsulation. Encapsulation consists of grouping similar
    properties and functions into an entity. Here is an example of a non encapsulated piece
    of codem and after encapping. 
*/

let baseSalary = 100000;
let overtime = 10;
let rate = 20;

function calculateWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}

// We can do encapsulation of this in an object literal form:

const employee = {
    baseSalary: 100000,
    overtime: 10,
    rate: 20,
    get calculateWage() {
        return baseSalary + (overtime * rate);
    }
}

/* The goal of encapsulation is to limit the amount of parameters in our functions to avoid
   having a procedural style of programming where to many functions among each other can lead
   to errors if one is potentially changed. Encapsulation allows us to avoid that since we are 
   using properties of that same object for their functions. 
*/

//--------------------------------------------------------------------------------------------

/*
    Abstraction, think of a old dvd player as an object. On the inside it has a complex logic board,
    but on the outside there is simple buttons such as play or pause. All that complexity is hidden
    from the user. That is abstraction. In programming, this consists of making objects with a simple
    interface, and functions that reduce the impact of change on the outside. 
*/

/*
    Inheritance is a mechanism that allows you to elinate redunant code. For example, think of html
    elements, TextBox, Select, CheckBox. All these elements have the following properties and functions,
    hidden innerHTML, click(), and focus(). All these can be defined in 1 object, than all these other
    elements can inherit these properties and functions.
*/

/*
    Polymorphism - Poly means many, morphism means forms. Many different forms. Take the html elements from
    above and there properties and functions. Although on the surface they appear the same, when used on a
    different html element, they are rendered differently. The property or method will act different depending
    on which 'form' or object it takes on. 
*/

/*
    Summary:

    Encapsulation - Reduce complexity + increase reusability
    Abstraction - Reduce complexity + isolate impact of changes
    Inheritance - Eliminate redundant code
    Polymorphism - Refactor ugly switch/case statements
*/
