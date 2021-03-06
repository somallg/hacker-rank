function heapSort(array: number[]): number[] {
  // tslint:disable:no-parameter-reassignment
  array = createMaxHeap(array);
  // swap 0 and last item
  const l: number = array.length;
  for (let i: number = l - 1; i >= 0; i = i - 1) {
    // tslint:disable:no-parameter-reassignment
    [array[0], array[i]] = [array[i], array[0]];
    array = heapify(array, 0, i);
  }

  return array;
}

function createMaxHeap(array: number[]): number[] {
  for (let i: number = array.length / 2; i >= 0; i = i - 1) {
    heapify(array, i, array.length);
  }

  return array;
}

function heapify(array: number[], index: number, heapSize: number): number[] {
  const left: number = index * 2 + 1;
  const right: number = index * 2 + 2;
  let maxIndex: number = index;

  if (left < heapSize && array[maxIndex] < array[left]) {
    maxIndex = left;
  }

  if (right < heapSize && array[maxIndex] < array[right]) {
    maxIndex = right;
  }

  if (maxIndex !== index) {
    // swap index with maxIndex;
    [array[index], array[maxIndex]] = [array[maxIndex], array[index]];
    heapify(array, maxIndex, heapSize);
  }

  return array;
}

export { heapSort };
