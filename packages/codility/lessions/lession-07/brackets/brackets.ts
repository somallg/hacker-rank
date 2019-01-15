/**
 */

import { Stack } from '../stack';

function isOpenningString(s: string): boolean {
  return s === '(' || s === '[' || s === '{';
}

function getOpenningString(s: string): string {
  return s === ')' ? '(' : s === ']' ? '[' : '{';
}

function solveBrackets(s: string): number {
  const n: number = s.length;
  const stack: Stack<string> = new Stack<string>();

  if (!n) {
    return 1;
  }

  for (let i: number = 0; i < n; i = i + 1) {
    const currentString: string = s[i];

    if (isOpenningString(currentString)) {
      stack.push(currentString);
    } else {
      // closing string
      if (getOpenningString(currentString) !== stack.pop()) {
        // closing string not match opening;
        return 0;
      }
    }
  }

  return stack.length === 0 ? 1 : 0;
}

export { solveBrackets };
