let times = 0;
let intervalRef;

function writeLog() {
    console.log(`Ran ${times} times.`);
    times = times + 1;
    if (times == 3){
        process.exit();
    }
}

intervalRef = setInterval(writeLog, 1000);