function timeToWalk(steps, footprint, speed) {
    let distace = Number(steps) * Number(footprint);
    let speedMeterInSec = Number(speed)/3.6;
    let time = distace / speedMeterInSec;
    let rest = Math.floor(distace / 500);

    let min = Math.floor(time / 60);
    
    let hours = 0;
    if (min > 60) {
        hours = Math.floor(min/60);
        min = min % 60;
    }
}

timeToWalk(4000, 0.60, 5);
console.log('=============');
timeToWalk(2564, 0.70, 5.5);