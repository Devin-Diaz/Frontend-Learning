// given an input integer, find all prime numbers from 2 to that limit inclusive.

function isPrime(num) {
    for(let factor = 2; factor < num; factor++) {
        if(num % factor === 0) return false;
    }
    return true;
}

function showPrimeNums(limit) {
    for(let i = 2; i <= limit; i++) {
        if(isPrime(i)) console.log(i);
    }
}

showPrimeNums(10)