/*
    Create a function that sums elements. However the input can either be an array of elements
    or n elements as arguments. The function should be able to sum the elements regardless of 
    input type.
*/

function sum(...elements) {
    if(elements.length == 1 && Array.isArray(elements[0])) 
        elements = [...elements];
    return elements.reduce((a, b) => a + b);
}

