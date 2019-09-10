/**
 * BooleanEvaluation
 */

function countEval(s: string, target: boolean): number {
  return countEvalMemo(s, target, new Map());
}

function convertToBoolean(s: string): boolean {
  return s === '1';
}

function countEvalMemo(s: string, target: boolean, memo: Map<string, number>): number {
  if (s.length === 0) {
    return 0;
  }

  if (s.length === 1) {
    return convertToBoolean(s) === target ? 1 : 0;
  }

  if (memo.has(s)) {
    return memo.get(s) || 0;
  }

  let ways = 0;

  for (let i = 1; i < s.length; i += 2) {
    const c = s[i];
    const left = s.substr(0, i);
    const right = s.substr(i + 1);

    const leftTrue = countEval(left, true);
    const leftFalse = countEval(left, false);
    const rightTrue = countEval(right, true);
    const rightFalse = countEval(right, false);

    const totalEval = (leftTrue + leftFalse) * (rightTrue + rightFalse);

    let totalTrue = 0;

    if (c === '&') {
      totalTrue = leftTrue * rightTrue;
    } else if (c === '|') {
      totalTrue = leftTrue * rightTrue + leftTrue * rightFalse + leftFalse * rightTrue;
    } else if (c === '^') {
      totalTrue = leftFalse * rightTrue + leftTrue * rightFalse;
    }

    ways += target ? totalTrue : totalEval - totalTrue;
  }

  memo.set(s, ways);

  return ways;
}

export { countEval };
