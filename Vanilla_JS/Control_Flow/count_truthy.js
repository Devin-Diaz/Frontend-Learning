/*
    Input is an array
    Truthy - when a non boolean val is entered as a conditional, JavaScript attempts to convert it to a boolean val.
    undefined, null, '', false, 0, NaN -> all falsy values.

    [0, 1, 2, 3] -> 3 truthy values
*/

function truthyCount(array) {
    let counter = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i]) counter++;
    }
    return counter;
}

