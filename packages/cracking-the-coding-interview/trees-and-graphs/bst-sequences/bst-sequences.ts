/**
 * BstSequences
 */

import { BinaryTree } from '../binary-tree';

function bstSequences(node: BinaryTree | undefined): number[][] {
  if (node === undefined) {
    return [[]];
  }

  const res: number[][] = [];

  const prefix: number[] = [];
  prefix.push(node.value);

  const leftSequences: number[][] = bstSequences(node.left);
  const rightSequences: number[][] = bstSequences(node.right);

  for (const left of leftSequences) {
    for (const right of rightSequences) {
      const weaved: number[][] = [];
      weaveLists(left, right, prefix, weaved);
      res.push(...weaved);
    }
  }

  return res;
}

function weaveLists(
  first: number[],
  second: number[],
  prefix: number[],
  results: number[][]
): void {
  if (first.length === 0 || second.length === 0) {
    const result: number[] = prefix
      .slice(0)
      .concat(first)
      .concat(second);
    results.push(result);

    return;
  }

  const firstHead: number = first.shift() || 0;
  prefix.push(firstHead);
  weaveLists(first, second, prefix, results);
  prefix.pop();
  first.unshift(firstHead);

  const secondHead: number = second.shift() || 0;
  prefix.push(secondHead);
  weaveLists(first, second, prefix, results);
  prefix.pop();
  second.unshift(secondHead);
}

export { bstSequences };
