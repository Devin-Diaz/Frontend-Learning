// given a limit, find the multiples of 3 and 5 between 0 to that limit argument and sum them together

function sum(limit) {
    let totalSum = 0;
    for(let i = 0; i <= limit; i++) {
        if(i % 3 == 0 || i % 5 == 0) totalSum += i;
    }
    console.log(totalSum);
}

