function solve(arr) {
    const filtered = arr.filter((c, i) => i % 2);

    console.log(filtered);
}

solve([10, 15, 20, 25]);
console.log('===============');
solve([3, 0, 10, 4, 7, 3]);