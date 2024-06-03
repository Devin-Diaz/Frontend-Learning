// make a function that filters all even numbers in an array
let x = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10];

const outputArr = x.filter(n =>
    n % 2 ==0
);
console.log(outputArr);


// Getting a little crazier, we can map elements to outputs.
// For example, from above, we want all filtered elements mapped to htnl li tags.

const items = outputArr.map(n => // returns an array of new mapped items
    '<li>' + n + '</li>'
);

const html = '<ul' + items.join('') + '</ul>'
console.log(html);

// Now let's get really crazy, given an input array of integers, filter all the even numbers, map those even numbers to objects,
// filter them again to any numbers greater than two, lastly, map those values again to objects, then iterate through them and their index. 

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = nums
    .filter(num => num % 2 == 0)
    .map(evenNum => ({value: evenNum}))
    .filter(numObjects => numObjects.value > 2)
    .map(newNum => newNum.value);

result.forEach((num, index) => console.log(index + ': ' + num));


// write a function that sums an array
let arrSum = [1, 2, 3, 4, 5]
const sum = arrSum.reduce((accumalator, current) => accumalator + current);
console.log(sum);