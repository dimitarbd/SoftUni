function ladybugs(arr) {
    let arraySize = arr.shift();
    let initInd = arr.shift().split(' ');
    let newArray = [];

    for (let i = 1; i <= arraySize; i++) {
        newArray.push(0);
    }

    for (let idx of initInd) {
        idx = Number(idx)
        newArray.splice(idx, 1, 1)
    }

    arr.forEach(el => {
        let [startPoint, dir, flyLength] = el.split(' ');
        startPoint = Number(startPoint);
        flyLength = Number(flyLength)
        if (dir == "right") {
            if (newArray[startPoint] == 1) {
                newArray[startPoint] = 0;
                if (newArray[startPoint + flyLength] == 1) {
                    for (let i = startPoint + flyLength; i < newArray.length; i++) {
                        if (newArray[i] == 0) {
                            flyLength = i;
                            newArray[flyLength] = 1;
                            break;
                        }
                    }
                } else {
                    newArray[startPoint] = 0;
                    if ((startPoint + flyLength) < newArray.length) {
                        newArray[startPoint + flyLength] = 1;
                    }
                }
            }
        } else {
            if (newArray[startPoint] == 1) {
                if (newArray[startPoint - flyLength] == 1) {
                    newArray[startPoint] = 0;
                    for (let i = startPoint - flyLength; i < newArray.length; i--) {
                        if (newArray[i] == 0) {
                            flyLength = i;
                            newArray[flyLength] = 1;
                            break;
                        }
                    }
                } else {
                    newArray[startPoint] = 0;
                    if ((startPoint - flyLength) < newArray.length) {
                        newArray[startPoint - flyLength] = 1;
                    }
                }
            }
        }
    });

    let result = newArray.join(' ');
    console.log(result);
}
ladybugs([5, '0 1 2',
    '0 right 1',
    '2 right 1']);
// console.log('==============');
// ladybugs([ 3, '0 1 2',
// '0 right 1',
// '1 right 1',
// '2 right 1']);
// console.log('==============');
// ladybugs([ 5, '3',
// '3 left 2',
// '1 left -2']);