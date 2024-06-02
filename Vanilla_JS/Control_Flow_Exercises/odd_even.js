// take input integer, from 0 to input integer inclusive, display the number and whether it's even or odd.


function evenOrOdd(num) {
    if(num % 2 === 0) return ' EVEN';
    else return ' ODD';
}


function showNumbers(inputNum) {
    for(let i = 0; i <= inputNum; i++) {
        console.log(i + evenOrOdd(i));
    }
}