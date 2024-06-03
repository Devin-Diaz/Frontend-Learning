// combining and slicing arrays
// Note for reference types with slice, it returns a copy of the address thus you'll be referencing the same object. 

let x = [1, 2, 3];
let y = [4, 5, 6];
let z = x.concat(y); // combines arrays, can be used for strings as well

// or we can be cool and concat arrays in this format
let combined = [...x, ...y];

let spliceCopy = z.slice(1, 4) // (starting index, ending index (exclusive)) , if no args entered, returns copy of array.


// iterating through an array, recall | for in -> gets indices, for of -> gets values |
// basic for of loop
let array = ['a', 'b', 'c', 'd'];

for(let n of array) console.log(n);

// ES6 iteration, we can add a second arg to for each to get the index of the value as well.
array.forEach(n => {
    console.log(n);
});


// joining arrays and splitting strings
let nameArray = ['d', 'e', 'v', 'i', 'n']
fullName = nameArray.join(''); // converts the array into a string with a seperator between each element (I choose none cus it's name)

let nums = '1 2 3 4';
let numsArray = nums.split(' '); // converts string into an array via delimeter


// basic sorting for primitive types
// we can use sort() function, reverse() is also a thing

// sorting for reference types, we use a comparator style function with sort().

const courses = [
    {id: 2, name: 'ZZZ ZZZZ'},
    {id: 1, name: 'Discrete Math'}
];

courses.sort((course1, course2) => {
    let a = course1.name.toLowerCase();
    let b = course2.name.toLowerCase();

    if(a > b) return 1;
    if(a < b) return -1
    return 0; 
});

console.log(courses); // should be sorted with discrete math being first


// write a function that checks whether all elements are positive in an array
let numsList = [2, 4, -1, 5, 54]

const allPositive = numsList.every(num => 
    num >= 0
);

console.log(allPositive); // returns false

// write a function that checks whether there is at least one one positive number
const atLeastOnePositive = numsList.some(num =>
    num >= 0
);

console.log(atLeastOnePositive); // returns true 