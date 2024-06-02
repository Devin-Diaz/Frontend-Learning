/* Given an input array of integers that denote marks of students in different subjects,
   calculate the average, based off the average,

   1-59: F
   60 - 69: D
   70 - 79: C
   80 - 89: B
   90 -100: A
*/

function getAverage(inputArray) {
    let sum = 0;
    for(let n of inputArray) {
        sum += n
    }
    return (sum / inputArray.length);
}

function grade(array) {
    let average = getAverage(array);

    if(average >= 90) console.log('A');
    else if(average <= 89 && average >= 80) console.log('B');
    else if(average <= 79 && average >= 70) console.log('C');
    else if(average <= 69 && average >= 60) console.log('C');
    else console.log('F')
}

grade([80, 80, 50])