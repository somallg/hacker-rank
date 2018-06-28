/**
 * Interviewbit - Maxspprod
 */

import { zip } from '@challenges/util';

interface SpecialValue {
  value: number;
  index: number;
}

function peek(stack: SpecialValue[]): SpecialValue {
  const l = stack.length;

  return stack[l - 1];
}

function getLeftSpecialValues(array: number[]): number[] {
  const maxStack: SpecialValue[] = [];
  const leftValues: number[] = [];

  for (let i = 0; i < array.length; i = i + 1) {
    while (maxStack.length > 0 && peek(maxStack).value <= array[i]) {
      maxStack.pop();
    }

    if (maxStack.length === 0) {
      leftValues.push(0);
    } else {
      leftValues.push(peek(maxStack).index);
    }

    maxStack.push({ value: array[i], index: i });
  }

  return leftValues;
}

function getRightSpecialValues(array: number[]): number[] {
  const maxStack: SpecialValue[] = [];
  const values: number[] = [];

  for (let i = array.length - 1; i >= 0; i = i - 1) {
    while (maxStack.length > 0 && peek(maxStack).value <= array[i]) {
      maxStack.pop();
    }

    if (maxStack.length === 0) {
      values.push(0);
    } else {
      values.push(peek(maxStack).index);
    }

    maxStack.push({ value: array[i], index: i });
  }

  return values.reverse();
}

function maxspprod(array: number[]): number {
  const l = array.length;
  if (l === 0) {
    return 0;
  }

  const leftSpecialValues = getLeftSpecialValues(array);

  const rightSpecialValues = getRightSpecialValues(array);

  return (
    zip(leftSpecialValues, rightSpecialValues)
      .map(([leftValue, rightValue]) => leftValue * rightValue)
      .reduce((acc, value) => Math.max(acc, value)) % 1000000007
  );
}

export { maxspprod };
