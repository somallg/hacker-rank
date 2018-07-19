'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', (inputStdin: string) => {
  inputString = inputString + inputStdin;
});

process.stdin.on('end', () => {
  const input = inputString
    .replace(/s*$/, '')
    .split('\n')
    .map(str => str.replace(/s*$/, ''));

  main(input);
});

// Complete the solveTest function below.
function solveTest(array: number[]): string {
  let result = [];
  for (let i = 0; i < array.length; i = i + 1) {
    if (array[i] === 42) {
      break;
    } else {
      result.push(array[i]);
    }
  }

  return result.join('\n');
}

function main(input: string[]) {
  const result = solveTest(input.map(Number));

  console.log(result);
}
