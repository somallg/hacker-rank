/**
 * Interviewbit - WaysToDecode
 */
import { MemoFn, memorized } from '@challenges/util';

function isValid(code: string, fromN: number, toN: number = fromN): boolean {
  if (toN >= code.length) {
    return false;
  }

  const n: number = Number(code.substr(fromN, toN - fromN + 1));

  return n >= 1 && n <= 26;
}

function solveWaysToDecode(code: string): number {
  const waysToDecodeRec: MemoFn<string, number> = memorized<string, number>(
    // tslint:disable-next-line
    (code: string) => {
      if (code.length <= 0) {
        return 1;
      }

      if (code[0] === '0') {
        return 0;
      }

      let result: number = 0;

      if (isValid(code, 0)) {
        result = result + waysToDecodeRec(code.slice(1));
      }

      if (isValid(code, 0, 1)) {
        result = result + waysToDecodeRec(code.slice(2));
      }

      return result;
    }
  );

  return waysToDecodeRec(code);
}

export { solveWaysToDecode };
