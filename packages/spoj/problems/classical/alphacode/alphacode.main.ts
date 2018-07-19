'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

inputString = '';

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

function memorized<K, V>(fn: (x: K) => V): (x: K) => V {
  const memo = new Map<K, V>();

  return (x: K): V => {
    const [cachedValue = fn(x)] = [memo.get(x)];
    memo.set(x, cachedValue);

    return cachedValue;
  };
}

function isValid(code: string, from: number, to = from) {
  if (to >= code.length) {
    return false;
  }

  const n = Number(code.substr(from, to - from + 1));

  return n >= 1 && n <= 26;
}

function solveAlphacode(code: string): number {
  const waysToDecodeRec = memorized<string, number>((code: string) => {
    if (code.length <= 0) {
      return 1;
    }

    if (code[0] === '0') {
      return 0;
    }

    let result = 0;

    if (isValid(code, 0)) {
      result = result + waysToDecodeRec(code.slice(1));
    }

    if (isValid(code, 0, 1)) {
      result = result + waysToDecodeRec(code.slice(2));
    }

    return result;
  });

  return waysToDecodeRec(code);
}

function main(input: string[]) {
  let inputCode = [];
  for (let i = 0; i < input.length; i = i + 1) {
    if (input[i] !== '0') {
      inputCode.push(input[i]);
    } else {
      break;
    }
  }

  inputCode.forEach(c => console.log(solveAlphacode(c)));
}
