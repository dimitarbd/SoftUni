function sameNumbers(num) {
    let isSame = true;
    let sum = 0;
    let numAsString = num.toString();

    for (let i= 0; i < numAsString.length; i++) {
        if (numAsString[i] !== numAsString[i-1]) {
            isSame = false;
        }
    }
    console.log(isSame);
}

sameNumbers(2222222);
console.log('=========');
sameNumbers(1234);
