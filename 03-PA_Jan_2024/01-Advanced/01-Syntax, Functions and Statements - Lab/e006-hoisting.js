f1();

function f1() {
    f2();
    console.log('f1');
    
    function f2() {
        console.log('f2');
    }
}