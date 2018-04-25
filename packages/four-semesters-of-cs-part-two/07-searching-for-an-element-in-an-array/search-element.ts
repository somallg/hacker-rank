interface Element {
  id: number;
}

function linearSearch(id: number, array: Element[]): Element | undefined {
  return array.filter(element => element.id === id)[0];
}

function binarySearch(id: number, array: Element[]): Element | undefined {
  let min = 0;
  let max = array.length - 1;
  let index;
  let element;

  while (min <= max) {
    index = Math.floor((min + max) / 2);
    element = array[index];
    if (element.id < id) {
      min = index + 1;
    } else if (element.id > id) {
      max = index - 1;
    } else {
      return element;
    }
  }

  return undefined;
}

export { linearSearch, binarySearch };
