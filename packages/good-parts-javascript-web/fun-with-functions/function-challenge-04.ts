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

function to(
  gen: () => number | undefined,
  end: number
): () => number | undefined {
  return (): number | undefined => {
    const value: number | undefined = gen();

    if (value && value < end) {
      return value;
    }

    return undefined;
  };
}

function fromTo(start: number, end: number): () => number | undefined {
  return to(from(start), end);
}

function element<T>(
  array: T[],
  gen: () => number | undefined = fromTo(0, array.length)
): () => T | undefined {
  return (): T | undefined => {
    const index: number | undefined = gen();

    if (index !== undefined && index <= array.length - 1) {
      return array[index];
    }

    return undefined;
  };
}

export { from, fromES6, to, fromTo, element };
