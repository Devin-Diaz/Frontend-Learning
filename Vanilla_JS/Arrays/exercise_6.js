// given an input array and target element, count how many times that element appears in the array.

function countOccurences(array, target) {
    let counter = 0;

    for(let n of array){
        if(n === target) counter++;
    }
    return counter;
}

function countOccurencesUsingReduce(array, target) {
    const counter = array.reduce((accumalator, current) => {
        const occurence = (current === target) ? 1 : 0;
        return accumalator + occurence;
    })
    return counter;
}

