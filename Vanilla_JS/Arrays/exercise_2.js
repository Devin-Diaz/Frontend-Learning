// write a function like the includes() method. Implement it yourself. 

function includes(array, target) {
    for(let n of array) {
        if(n === target) return true;
    }
    return false;
}

