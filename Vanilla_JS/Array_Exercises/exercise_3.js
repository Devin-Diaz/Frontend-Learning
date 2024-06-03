// given an array and target element, if the array contains that element, remove it.

function except(array, target) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === target) array.splice(i, 1);
    }
    return array;
}
