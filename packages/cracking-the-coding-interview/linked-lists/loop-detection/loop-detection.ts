/**
 * LoopDetection
 */

import { LinkedListNode } from '../index';

function createLoop(array: number[]): LinkedListNode {
  if (array.length <= 0) {
    return new LinkedListNode(0);
  }

  const [head, ...rest] = array;

  const headNode = new LinkedListNode(head);

  const seed = Math.round(Math.random() * (array.length - 1)) + 1;

  let loopNode = null;
  let previous = headNode;

  rest.forEach((n, index) => {
    const node = new LinkedListNode(n);
    previous.next = node;
    previous = node;
    if (index === seed) {
      loopNode = node;
    }
  });

  previous.next = loopNode;

  return headNode;
}

function isLoop(head: LinkedListNode): LinkedListNode | null {
  let slow: LinkedListNode | null = head;
  let fast: LinkedListNode | null = head;

  while (slow !== null && fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break;
    }
  }

  if (fast === null || fast.next === null) {
    return null;
  }

  slow = head;
  while (slow !== fast && slow !== null && fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  return fast;
}

function loopDetection(array: number[]): boolean {
  const node = createLoop(array);

  return isLoop(node) !== null;
}

export { loopDetection };
