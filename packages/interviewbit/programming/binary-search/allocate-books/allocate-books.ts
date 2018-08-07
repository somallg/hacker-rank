/**
 * AllocateBooks
 */

function findNumberOfStudents(books: number[], volume: number): number {
  let sum = 0;
  let countOfStudent = 1;

  books.forEach(v => {
    if (sum + v <= volume) {
      sum = sum + v;
    } else {
      sum = v;
      countOfStudent = countOfStudent + 1;
    }
  });

  return countOfStudent;
}

function allocateBooks(books: number[], m: number): number {
  const l = books.length;
  if (l < m || l === 0) {
    return -1;
  }
  const maxVolume = books.reduce((acc, v) => Math.max(acc, v));
  const sumVolume = books.reduce((acc, v) => acc + v);

  let start = maxVolume;
  let end = sumVolume;

  while (start <= end) {
    // tslint:disable:no-bitwise
    const middle = (start + end) >>> 1;
    if (findNumberOfStudents(books, middle) <= m) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return start;
}

export { allocateBooks };
