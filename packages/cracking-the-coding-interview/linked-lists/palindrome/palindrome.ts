/**
 * Palindrome
 */

import { LinkedListNode } from '../index';

// tslint:disable-next-line
class ResultNode {
  public node: LinkedListNode | undefined;
  public result: boolean;

  constructor(node: LinkedListNode | undefined, result: boolean) {
    this.node = node;
    this.result = result;
  }
}

function createLinkedList(array: number[]): LinkedListNode {
  const [head, ...rest]: number[] = array;
  const headNode: LinkedListNode = new LinkedListNode(head);

  let previous: LinkedListNode = headNode;
  rest.forEach((n: number) => {
    const node: LinkedListNode = new LinkedListNode(n);
    previous.next = node;
    previous = node;
  });

  return headNode;
}

function isPalindromeRecurse(
  head: LinkedListNode | undefined,
  length: number
): ResultNode {
  if (head === undefined || length <= 0) {
    return new ResultNode(undefined, true);
  } else if (length === 1) {
    return new ResultNode(head.next, true);
  }

  // recurse on sublist
  const res: ResultNode = isPalindromeRecurse(head.next, length - 2);

  if (!res.result || res.node === undefined) {
    return res;
  }

  res.result = head.data === res.node.data;
  res.node = res.node.next;

  return res;
}

function palindrome(array: number[]): boolean {
  const linkedList: LinkedListNode = createLinkedList(array);

  return isPalindromeRecurse(linkedList, array.length).result;
}

export { palindrome };
