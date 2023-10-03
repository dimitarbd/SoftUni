function equalSums(arr) {
    let sumLeft = 0;
    let sumRight = 0;
    let isTrue = false;

    for (let i = 0; i < arr.length; i++) {
        sumLeft = 0;
        sumRight = 0;
        for (let j = i+1; j < arr.length; j++) {
            sumLeft += arr[j - (i + 1)];
            sumRight += arr[j]; 
        }
        if (sumLeft == sumRight) {
        console.log(i);
        isTrue = true;
        break;
        }
    }
    if (!isTrue) {
        console.log('no');
    }
    // console.log(arr[0]);
}
equalSums([1, 2, 3, 3]);
// equalSums([1, 2]);
// equalSums([1]);
// equalSums([1, 2, 3]);
// equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
               