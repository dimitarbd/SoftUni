function maxSequenceEqualElements(arr) {
    let maxSequence = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1] || arr[i] == arr[i - 1]) {
            maxSequence += arr[i];
        }
    }
    
    for (let i = 0; i < maxSequence.length; i++) {
        let maxTemp = [];
        let counter = 0;
        
        for (let j = 0; j < maxSequence.length; j++) {
            if (maxSequence[i] == maxSequence[j]) {
                maxTemp += maxSequence[j];
                counter++;
            }
        }
        console.log(maxTemp);
        console.log(counter);
    }

    // console.log(maxSequence);
}
maxSequenceEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// maxSequenceEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
// maxSequenceEqualElements([4, 4, 4, 4]);
// maxSequenceEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
