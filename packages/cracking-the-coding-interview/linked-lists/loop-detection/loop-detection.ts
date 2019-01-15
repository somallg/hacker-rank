/**
 * LoopDetection
 */

import { LinkedListNode } from '../index';

function createLoop(array: number[]): LinkedListNode | undefined {
  if (array.length <= 0) {
    return undefined;
  }

  const [head, ...rest]: number[] = array;

  const headNode: LinkedListNode = new LinkedListNode(head);

  const seed: number = 2;

  // @ts-ignore
  // tslint:disable-next-line
  let loopNode: LinkedListNode = undefined;
  let previous: LinkedListNode = headNode;

  rest.forEach((n: number, index: number) => {
    const node: LinkedListNode = new LinkedListNode(n);
    previous.next = node;
    previous = node;
    if (index + 1 === seed) {
      loopNode = node;
    }
  });

  // @ts-ignore
  previous.next = loopNode;

  return headNode;
}

function isLoop(head: LinkedListNode | undefined): LinkedListNode | undefined {
  let slow: LinkedListNode | undefined = head;
  let fast: LinkedListNode | undefined = head;

  while (slow !== undefined && fast !== undefined && fast.next !== undefined) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break;
    }
  }

  if (fast === undefined || fast.next === undefined) {
    return undefined;
  }

  slow = head;
  while (slow !== fast && slow !== undefined && fast !== undefined) {
    slow = slow.next;
    fast = fast.next;
  }

  return fast;
}

function loopDetection(array: number[]): boolean {
  const node: LinkedListNode | undefined = createLoop(array);

  return isLoop(node) !== undefined;
}

export { loopDetection };
