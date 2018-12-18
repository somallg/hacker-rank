/**
 * Palindrome
 */

class LinkedListNode {
  public next: LinkedListNode | null;
  public data: number;

  constructor(data: number) {
    this.next = null;
    this.data = data;
  }
}

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
  const head = new LinkedListNode(array[0]);

  let previous = head;
  for (let i = 1; i < array.length; i += 1) {
    const node = new LinkedListNode(array[i]);
    previous.next = node;
    previous = node;
  }

  return head;
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
