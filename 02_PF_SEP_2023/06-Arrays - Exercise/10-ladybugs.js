function ladybugs(arr) {
    let arraySize = arr.shift();
    let initInd = arr.shift().split(' ');
    let newArray = [];

    for (let i = 1; i <= arraySize; i++) {
        newArray.push(0);
    }

    for(let i = 0; i < initInd.length; i++) {
        newArray.splice(initInd[i], 1, 1)
    }


}
// ladybugs([ 3, '0 1',
// '0 right 1',
// '2 right 1' ]);
// ladybugs([ 3, '0 1 2',
// '0 right 1',
// '1 right 1',
// '2 right 1']);
ladybugs([ 5, '3',
'3 left 2',
'1 left -2']);