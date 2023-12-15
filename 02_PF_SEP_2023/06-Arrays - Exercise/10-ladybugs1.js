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

    for (let tokens of arr) {
        let [startIdx, direction, endIdx] = tokens.split(' ');
        startIdx = Number(startIdx);
        endIdx = Number(endIdx);

        if ((startIdx >= 0 && startIdx < newArray.length) && (endIdx >= 0 && endIdx < newArray.length)) {
            switch (direction) {
                case 'right':
                    if (newArray[startIdx] == 1) {
                        if (newArray[endIdx] == 0) {
                            newArray.splice(startIdx, 1, 0);
                            newArray.splice(endIdx, 1, 1);
                        } else {
                            newArray.splice(startIdx, 1, 0);
                            newArray.splice(endIdx + 1, 1, 1);
                        }
                    }
                    break;
                case 'left':
                    if (newArray[startIdx] == 1) {
                        if (newArray[endIdx] == 0) {
                            newArray.splice(startIdx, 1, 0);
                            newArray.splice(startIdx - endIdx, 1, 1);
                        } else {
                            newArray.splice(startIdx, 1, 0);
                            newArray.splice(startIdx - endIdx - 1, 1, 1);
                        }
                        break;
                    }
            }
        }

        let result = newArray.join(' ');
        console.log(result);
    }
    ladybugs([3, '0 1',
        '0 right 1',
        '2 right 1']);
    console.log('==============');
    ladybugs([3, '0 1 2',
        '0 right 1',
        '1 right 1',
        '2 right 1']);
    console.log('==============');
    ladybugs([5, '3',
        '3 left 2',
        '1 left -2']);