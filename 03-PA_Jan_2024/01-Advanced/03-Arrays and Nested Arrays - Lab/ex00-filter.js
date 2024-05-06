function solve(arr) {
    arr.filter((c, i) => i % 2).map(e => e * 2);
    console.log(doubled);
    doubled.reverse();
    console.log(doubled);
    const result = doubled.join(' ');
    console.log(result);

}

solve([10, 15, 20, 25]);
console.log('===============');
solve([3, 0, 10, 4, 7, 3]);