// Given a min and max integer inputs, create a function that creates an array and adds all numbers between those ranges inclusive.

function arrayFromRange(min, max) {
    output = [];

    for(let i = min; i <= max; i++) {
        output.push(i);
    }
    return output;
}

