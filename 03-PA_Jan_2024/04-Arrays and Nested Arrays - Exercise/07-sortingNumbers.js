function sortingNumbers(arr) {
    arr.sort((a, b) => a - b);
    let sortedArr = [];

    while (arr.length > 0) {
        let smallest = arr.shift();
        sortedArr.push(smallest);
        let biggest = arr.pop();
        sortedArr.push(biggest)
    }

    console.log(sortedArr);
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
console.log('=================');
sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);