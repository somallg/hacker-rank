function from(start: number): () => number {
  // tslint:disable-next-line
  return () => start++;
}

function* fromES6(start: number): IterableIterator<number> {
  while (true) {
    // tslint:disable-next-line
    yield start++;
  }
}

function to(gen: () => number, end: number): () => number | undefined {
  return () => {
    const value = gen();

    if (value < end) {
      return value;
    }

    return undefined;
  };
}

function fromTo(start: number, end: number): () => number | undefined {
  return to(from(start), end);
}

function element(
  array: any[],
  gen = fromTo(0, array.length)
): () => any | undefined {
  return () => {
    const index = gen();

    if (index !== undefined && index <= array.length - 1) {
      return array[index];
    }

    return undefined;
  };
}

export { from, fromES6, to, fromTo, element };
