function solve(arr) {
    let result = '';

    for(let i = 0; i < arr.length; i +=2) {
        result += arr[i];
        result += ' ';
    }
    console.log(result);
}

solve([10, 20, 30, 40, 50, 60]);