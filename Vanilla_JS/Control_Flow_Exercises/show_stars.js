// print the stair case going up to the left

function showStars(row) {
    for(let i = 0; i <= row; i++) {
        let line = '';
        for(let j = 0; j < i; j++) {
            line += '*';
        }
        console.log(line)
    }
}

showStars(10)