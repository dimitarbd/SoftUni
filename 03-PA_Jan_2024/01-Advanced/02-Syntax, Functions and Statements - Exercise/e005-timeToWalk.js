function timeToWalk(steps, footprint, speed) {
    let distace = Number(steps) * Number(footprint);
    let speedMeterInSec = Number(speed) / 3.6;
    let time = distace / speedMeterInSec;
    let rest = Math.floor(distace / 500);
    time += rest * 60;

    let sec = Math.round(time % 60);
    let min = Math.floor(time / 60);
    let hours = Math.floor(min / 60);
    min -= hours * 60;

    let hoursToPrint = sec < 10 ? `0${hours}` : `${hours}`;
    let minToPrint = min < 10 ? `0${min}` : `${min}`;
    let secToPrint = sec < 10 ? `0${sec}` : `${sec}`;

    console.log(`${hoursToPrint}:${minToPrint}:${secToPrint}`);
}

timeToWalk(4000, 0.60, 5);
console.log('=============');
timeToWalk(2564, 0.70, 5.5);