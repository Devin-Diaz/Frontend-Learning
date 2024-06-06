// Write a function that takes two numbers and returns the maximum of the two.

function first_approach(x, y) {
    // where x and y are integers
    if(x > y) return x;
    else if(y > x) return y;
    else return x;
}

function second_approach(x, y) {
    return Math.max(x, y);
}

