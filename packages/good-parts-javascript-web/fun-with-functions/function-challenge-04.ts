function from(start: number): Function {
  return () => start++;
}

function* fromES6(start: number): IterableIterator<number> {
  while (true) {
    yield start++;
  }
}

function to(gen: Function, end: number): Function {
  return () => {
    const value = gen();

    if (value < end) {
      return value;
    }

    return undefined;
  };
}

function fromTo(start: number, end: number): Function {
  return to(from(start), end);
}

function element(array: any[], gen = fromTo(0, array.length)): Function {
  return () => {
    const index = gen();

    if (index <= array.length - 1 && index !== undefined) {
      return array[index];
    }

    return undefined;
  };
}

export { from, fromES6, to, fromTo, element };
