// Given an input object with x fields, count how many of those fields are strings.

function showProperties(obj) {
    let counter = 0;
    for(let field in obj) {
        if(typeof obj[field] === 'string') counter++;
    }
    return counter;
}

const person = {
    name: "devin",
    email: "ddiaz3@gmail.com",
    age: 5
};

console.log(showProperties(person))