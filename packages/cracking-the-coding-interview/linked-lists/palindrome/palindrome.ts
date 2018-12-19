/**
 * Palindrome
 */

import { LinkedListNode } from '../index';

// tslint:disable-next-line
class ResultNode {
  public node: LinkedListNode | null;
  public result: boolean;

  constructor(node: LinkedListNode | null, result: boolean) {
    this.node = node;
    this.result = result;
  }
}

function createLinkedList(array: number[]): LinkedListNode {
  const [head, ...rest] = array;
  const headNode = new LinkedListNode(head);

  let previous = headNode;
  rest.forEach(n => {
    const node = new LinkedListNode(n);
    previous.next = node;
    previous = node;
  });

  return headNode;
}

function isPalindromeRecurse(
  head: LinkedListNode | null,
  length: number
): ResultNode {
  if (head === null || length <= 0) {
    return new ResultNode(head, true);
  } else if (length === 1) {
    return new ResultNode(head.next, true);
  }

  // recurse on sublist
  const res: ResultNode = isPalindromeRecurse(head.next, length - 2);

  if (!res.result || res.node === null) {
    return res;
  }

  res.result = head.data === res.node.data;
  res.node = res.node.next;

  return res;
}

function palindrome(array: number[]): boolean {
  const linkedList = createLinkedList(array);

  return isPalindromeRecurse(linkedList, array.length).result;
}

export { palindrome };
