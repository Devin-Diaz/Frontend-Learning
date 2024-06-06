// Make an accumaltor function using the reduce method. However add defensive programming to
// to this function to ensure that the first argument is an array so we successfully iterate
// through it with the reduce method. 

function countOccurrences(array, targetElement) {

    if(!Array.isArray(array)) throw new Error('MUST BE AN ARRAY INPUT');

    const counter = array.reduce((accum, current) => {
        let temp = current === targetElement ? 1 : 0;
        return accum += temp;
    })

    return counter;
}

try {
    console.log(countOccurrences('hello', 1));
} catch(e) {
    console.log(e.message);
}