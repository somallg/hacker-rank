function getDigit(n: number, place: number, longestNumber: number): number {
  const s = n.toString();
  const size = s.length;

  const diff = longestNumber - size;
  return +s[place - diff] || 0;
}

function findLongestNumber(array: number[]): number {
  return array.reduce((longest, element) => {
    const currentLength = element.toString().length;
    return currentLength > longest ? currentLength : longest;
  }, 0);
}

function radixSort(array: number[]): number[] {
  const longestNumber = findLongestNumber(array);

  const buckets: number[][] = Array(10)
    .fill(0)
    .map(() => []); // make an array of 10 arrays

  for (let i = longestNumber - 1; i >= 0; i = i - 1) {
    while (array.length) {
      const current = array.shift() || 0;
      buckets[getDigit(current, i, longestNumber)].push(current);
    }

    for (let j = 0; j < 10; j = j + 1) {
      while (buckets[j].length) {
        array.push(buckets[j].shift() || 0);
      }
    }
  }

  return array;
}

export { radixSort };
