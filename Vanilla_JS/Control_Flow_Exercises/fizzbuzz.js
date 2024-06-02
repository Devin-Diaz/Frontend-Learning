// return fizz if integer is divisble by 3, buzz if div by 5, and fizzbuzz if div by 3 and 5

function fizzbuzz(num) {
    if(num % 15 == 0) return 'FizzBuzz';
    else if(num % 3 === 0) return 'Fizz';
    else if(num % 5 == 0) return 'Buzz';
    else return 'Nah';
}

console.log(fizzbuzz(30))

