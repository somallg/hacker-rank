import { getFunctionName } from './function.source';

function mainSource(challenge = 'codility', problem: string) {
  const functionName = getFunctionName(challenge, problem);

  return `'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', (inputStdin: string) => {
  inputString = inputString + inputStdin;
});

process.stdin.on('end', () => {
  const input = inputString
    .replace(/s*$/, '')
    .split("\n")
    .map(str => str.replace(/s*$/, ''));

  main(input);
});

// Complete the ${functionName} function below.
function ${functionName}(array: number[]): string {
  let result = [];
  for (let i = 0; i < array.length; i = i + 1) {
    if (array[i] === 42) {
      break;
    } else {
      result.push(array[i]);
    }
  }

  return result.join("\n");
}

function main(input: string[]) {
  const result = ${functionName}(input.map(Number));

  console.log(result);
}`;
}

export { mainSource };
