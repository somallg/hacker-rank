/**
 * Interviewbit - WaysToDecode
 */
import { memorized } from '@challenges/util';

function isValid(code: string, from: number, to = from) {
  if (to >= code.length) {
    return false;
  }

  const n = Number(code.substr(from, to - from + 1));

  return n >= 1 && n <= 26;
}

function solveWaysToDecode(code: string): number {
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

export { solveWaysToDecode };
