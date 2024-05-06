const arr = [3, 7, 1, 4, 5, 12];

function reducer(acc, num) {
    console.log(acc, num);

    return acc + num;
};

const result = arr.reduce(reducer, 0);

console.log(result);