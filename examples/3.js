let times = 0;
let intervalRef;

function writeLog() {
    console.log(`Ran ${times} times.`);
    times = times + 1;
    if (times == 3){
        clearInterval(intervalRef);
    }
}

intervalRef = setInterval(writeLog, 1000);