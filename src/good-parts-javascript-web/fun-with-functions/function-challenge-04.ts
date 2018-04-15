export function from(start) {
  return function () {
    return start++;
  };
}

function* fromES6(start) {
  while (true) {
    yield start++;
  }
}

export function to(gen, end) {
  return function () {
    const value = gen();

    if (value < end) {
      return value;
    }

    return undefined;
  };
}

export function fromTo(start, end) {
  return to(from(start), end);
}

export function element(array, gen = fromTo(0, array.length)) {
  return function () {
    const index = gen();

    if (index <= array.length - 1 && index !== undefined) {
      return array[index];
    }

    return undefined;
  };
}
