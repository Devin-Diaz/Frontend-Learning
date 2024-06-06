// Create a max function for an array, if an array is empty return undefined.

function maxElement(array) {
    if(array.length === 0) return undefined;
    
    let maxElement = Number.MIN_VALUE;
    for(let n of array) maxElement = Math.max(maxElement, n);
    return maxElement;
}

function maxElementUsingReduce(array) {
    if(array.length === 0) return undefined;
    return array.reduce((a, b) => a > b ? a : b);
}

