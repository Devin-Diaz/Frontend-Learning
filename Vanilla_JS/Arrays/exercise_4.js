// Create a function called move, with the following parameters, array, index, offset. 
// index will be the index of the element we are targeting, offset is how many places we will shift that element.
// If offset is greater than the length of array or less than -1, return an error displaying invalid offset.

function move(array, index, offset) {
    let pos = index + offset;
    if(pos >= array.length || pos < 0) {
        console.error('Invalid Offset.');
        return;
    }
    
    const output = [...array]
    const element = output.splice(index, 1)[0];
    output.splice((pos, 0, element));
    return output;
}

