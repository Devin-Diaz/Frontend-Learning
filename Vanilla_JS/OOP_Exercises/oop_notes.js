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
