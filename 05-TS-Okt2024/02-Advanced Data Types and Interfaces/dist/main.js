const arr = ['a', 1, 'b', 2];
arr.forEach((x) => {
    if (typeof x == 'string') {
        console.log('String : ' + x);
    }
    else {
        console.log(x * 1000);
    }
});
