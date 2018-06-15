import { getFunctionName } from './function.source';

function mainSource(challenge = 'codility', problem: string) {
  const functionName = getFunctionName(challenge, problem);

  return `'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the ${functionName} function below.
function ${functionName}() {
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const k = parseInt(readLine(), 10);

  let array = [];

  for (let i = 0; i < n; i++) {
    const arrayItem = parseInt(readLine(), 10);
    array.push(arrayItem);
  }

  let result = ${functionName}(array);

  ws.write(result + '\n');

  ws.end();
}`;
}

export { mainSource };
