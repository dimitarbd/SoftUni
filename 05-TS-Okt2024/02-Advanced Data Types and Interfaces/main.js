var arr = ['a', 1, 'b', 2];
arr.forEach(function (x) {
    if (typeof x == 'string') {
        console.log('String : ' + x);
    }
    else {
        console.log(x * 1000);
    }
});
