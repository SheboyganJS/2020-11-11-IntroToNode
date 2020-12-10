const firstNumber = process.argv[2];
const secondNumber = process.argv[3];

const sum = Number(firstNumber) + Number(secondNumber);

console.log(`the sum of the two (${firstNumber}, ${secondNumber}) is ${sum}`);

const nowMs = Date.now();
const oneDayMS = 24 * 60 * 60 * 1000;
const yesterday = new Date(nowMs - oneDayMS);
const yesterdayFormated = yesterday.toLocaleDateString();

console.log(`Yesterday was ${yesterdayFormated}`);