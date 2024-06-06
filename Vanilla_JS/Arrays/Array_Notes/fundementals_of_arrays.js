
// basic inserting operations for arrays
let arr = []

arr.push(3, 4); // appends x elements to the array
arr.unshift(1); // preppends x elements to the array
arr.splice(1, 0, 2); // (starting index, how many elements to remove, which elements to add (optional)), basically adding to mid of arr
console.log(arr) // 1, 2, 3, 4


// basic removing operations
let x = [1, 2, 3, 4]
x.pop() // removes from end of array
x.shift() // removes from front of array
x.splice(1, 2) // (starting index, how many elements to remove ahead)


// emptying an array
// method 1 adjust references
let array1 = [1, 2, 3]
let array2 = []
array1 = array2;

// method 2 set length to 0
array1 = [1, 2, 3, 4]
array1.length = 0

// method 3 use splice method
array1 = [1, 2, 3, 4]
array1.splice(0, array1.length)


// basic search operations for primitive types
let contained = arr.includes(4)
console.log(contained); // returns bool val if element contained.

let index = arr.indexOf(1);
console.log(index); // will return the index of first occurence of element, else -1 if not contained.


// searching reference types
const students = [
    {name: 'devin', age: 20},
    {name: 'John', age: 21}
];

// this is trash but either way doesn't work bc/ although same properties and values, different address as the one in array
console.log(students.includes({name: 'devin', age: 20}))

// hardo way
let isStudentContained = students.find(function(student) {
    return student.name === 'devin' && student.age === 20;
});

// ES6 way w/ arrow functions
let studContained = students.find(students => {
    return students.name === 'devin' && students.age === 20;
});