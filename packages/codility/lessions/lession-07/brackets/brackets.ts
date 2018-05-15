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
  const n = s.length;
  const stack = new Stack<string>();

  if (!n) {
    return 1;
  }

  for (let i = 0; i < n; i = i + 1) {
    const currentString = s[i];

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
