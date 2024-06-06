/*
    With mixins we can make object literals of functions, then assign specific functions to certain objects via the
    Object assign method that takes the target object prototype and a series of object literals. 
*/

function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function() {
        console.log('nom nom');
    }
}

const canWalk = {
    walk: function() {
        console.log('bro walks');
    }
}

const canSwim = {
    swim: function(){
        console.log('bro swims');
    }
}

function Person() {}

function Goldfish() {}

mixin(Person.prototype, canEat, canWalk);
mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish();
goldfish.swim();

const person = new Person();
person.walk();
