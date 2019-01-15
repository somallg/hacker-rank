interface Element {
  id: number;
  name: string;
}

function linearSearch(id: number, array: Element[]): Element | undefined {
  return array.filter((element: Element) => element.id === id)[0];
}

function binarySearch(id: number, array: Element[]): Element | undefined {
  let min: number = 0;
  let max: number = array.length - 1;
  let index: number;
  let element: Element;

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

export { binarySearch, Element, linearSearch };
